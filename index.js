const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 95) {
  collisionsMap.push(collisions.slice(i, 95 + i))
}

const battleZonesMap = []
for (let i = 0; i < battleZonesData.length; i += 95) {
  battleZonesMap.push(battleZonesData.slice(i, 95 + i))
}

const charactersMap = []
for (let i = 0; i < charactersMapData.length; i += 95) {
  charactersMap.push(charactersMapData.slice(i, 95 + i))
}

const boundaries = []
const offset = {
  x: -900,
  y: -1790
}

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 2049)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

const battleZones = []

battleZonesMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 2049)
      battleZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

const characters = []
const villagerImg = new Image()
villagerImg.src = './img/villager/Idle.png'

const oldManImg = new Image()
oldManImg.src = './img/oldMan/Idle.png'

charactersMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026 === villager
    if (symbol === 1026) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true,
          dialogue: ['...', 'Hey mister, have you seen my Doggochu?']
        })
      )
    }
    // 1031 === oldMan
    else if (symbol === 1031) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: oldManImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          dialogue: ['My bones hurt.']
        })
      )
    }

    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})

const image = new Image()
image.src = './img/Pellet Town.png'

const foregroundImage = new Image()
foregroundImage.src = './img/foregroundObjects.png'

const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'

const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2
  },
  image: playerDownImage,
  frames: {
    max: 4,
    hold: 10
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage
  }
})

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: image
})

const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: foregroundImage
})

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  },
  e: {
    pressed: false
  }
}

const movables = [
  background,
  ...boundaries,
  foreground,
  ...battleZones,
  ...characters
]
const renderables = [
  background,
  ...boundaries,
  ...battleZones,
  ...characters,
  player,
  foreground
]

const battle = {
  initiated: false
}
// var button = document.getElementById('button')
// var startScreen = document.getElementById('startScreen')
// button.addEventListener('click', function () {
//   startScreen.style.display = 'none'
// })
function animate() {
  const animationId = window.requestAnimationFrame(animate)
  renderables.forEach((renderable) => {
    renderable.draw()
  })
  let moving = true
  player.animate = false

  if (battle.initiated) return

  // activate a battle
  if (keys.e.pressed) {
    for (let i = 0; i < battleZones.length; i++) {
      const battleZone = battleZones[i]

      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone
        })
      ) {
        // deactivate current animation loop
        window.cancelAnimationFrame(animationId)

        // audio.Map.stop()
        // audio.initBattle.play()
        // audio.battle.play()
        battle.initiated = true
        gsap.to('#overlappingDiv', {
          opacity: 1,
          yoyo: true,
          onComplete() {
            gsap.to('#overlappingDiv', {
              opacity: 1,
              // duration: 0.4,
              onComplete() {
                // activate a new animation loop
                initPageContent()
                // animateBattle()
                gsap.to('#overlappingDiv', {
                  opacity: 0,
                })
              }
            })
          }
        })
        break
      }
    }
  }

  //Aimation for player movement and collision detection
  if ((keys.w.pressed && lastKey === 'w') || (keys.w.pressed && lastKey === 'ц')) {
    player.animate = true
    player.image = player.sprites.up

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: 3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y += 3
      })
  } else if ((keys.a.pressed && lastKey === 'a') || (keys.a.pressed && lastKey === 'ф')) {
    player.animate = true
    player.image = player.sprites.left

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x += 3
      })
  } else if ((keys.s.pressed && lastKey === 's') || (keys.s.pressed && lastKey === 'і')) {
    player.animate = true
    player.image = player.sprites.down

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: -3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= 3
      })
  } else if ((keys.d.pressed && lastKey === 'd') || (keys.d.pressed && lastKey === 'в')) {
    player.animate = true
    player.image = player.sprites.right

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: -3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= 3
      })
  }
}
animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
  if (player.isInteracting) {
    switch (e.key) {
      case ' ':
        player.interactionAsset.dialogueIndex++

        const { dialogueIndex, dialogue } = player.interactionAsset
        if (dialogueIndex <= dialogue.length - 1) {
          document.querySelector('#characterDialogueBox').innerHTML =
            player.interactionAsset.dialogue[dialogueIndex]
          return
        }

        // finish conversation
        player.isInteracting = false
        player.interactionAsset.dialogueIndex = 0
        document.querySelector('#characterDialogueBox').style.display = 'none'

        break
    }
    return
  }

  switch (e.key) {
    case ' ':
      if (!player.interactionAsset) return

      // beginning the conversation
      const firstMessage = player.interactionAsset.dialogue[0]
      document.querySelector('#characterDialogueBox').innerHTML = firstMessage
      document.querySelector('#characterDialogueBox').style.display = 'flex'
      player.isInteracting = true
      break
    case 'w':
    case 'ArrowUp':
      keys.w.pressed = true
      lastKey = 'w'
      break
    case 'a':
    case 'ArrowLeft':
      keys.a.pressed = true
      lastKey = 'a'
      break

    case 's':
    case 'ArrowDown':
      keys.s.pressed = true
      lastKey = 's'
      break

    case 'd':
    case 'ArrowRight':
      keys.d.pressed = true
      lastKey = 'd'
      break

    case 'e':
    case 'Enter':
      keys.e.pressed = true
      // lastKey = 'e'
      break
  }
})

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
    case 'ArrowUp':
      keys.w.pressed = false
      break
    case 'a':
    case 'ArrowLeft':
      keys.a.pressed = false
      break
    case 's':
    case 'ArrowDown':
      keys.s.pressed = false
      break
    case 'd':
    case 'ArrowRight':
      keys.d.pressed = false
      break
    case 'e':
    case 'Enter':
      keys.e.pressed = false
      break
  }
})

let clicked = false
addEventListener('click', () => {
  if (!clicked) {
    audio.Map.play()
    clicked = true
  }
})
