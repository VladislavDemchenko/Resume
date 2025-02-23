const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 95) {
  collisionsMap.push(collisions.slice(i, 95 + i))
}

const pagesZoneMap = []
for (let i = 0; i < pagesZoneData.length; i += 95) {
  pagesZoneMap.push(pagesZoneData.slice(i, 95 + i))
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

const projectZones = []
const educationZones = []
const experienceZones = []
const contactZones = []
const skillsZones = []

pagesZoneMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 2049) // project
      projectZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    if (symbol === 2048) // education
      educationZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    if (symbol === 2047) // experience
      experienceZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    if (symbol === 2046) // contact
      contactZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    if (symbol === 2045) // skills
      skillsZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
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
  ...projectZones,
  ...educationZones,
  ...experienceZones,
  ...contactZones,
  ...skillsZones,
]
const renderables = [
  background,
  ...boundaries,
  ...projectZones,
  ...educationZones,
  ...experienceZones,
  ...contactZones,
  ...skillsZones,
  player,
  foreground
]

const isPages = { initiated: false }
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

  if (isPages.initiated) return

  // activate a projects
  if (keys.e.pressed) {
    for (let i = 0; i < projectZones.length; i++) {
      const projectZone = projectZones[i]
      if (
          rectangularCollision({
            rectangle1: player,
            rectangle2: projectZone
          })
      ) {
        // deactivate current animation loop
        window.cancelAnimationFrame(animationId)
        isPages.initiated = true

        gsap.to('#overlappingDiv', {
          opacity: 1,
          yoyo: true,
          onComplete() {
            gsap.to('#overlappingDiv', {
              opacity: 1,
              // duration: 0.4,
              onComplete() {
                // activate a new animation loop
                initPageContent("projects")
                gsap.to('#overlappingDiv', {
                  opacity: 0,
                })
              }
            })
          }
        })
        break;
      }
    }
    for (let i = 0; i < educationZones.length; i++) {
      const educationZone = educationZones[i]
      if (rectangularCollision({
        rectangle1: player,
        rectangle2: educationZone
      })) {
        // deactivate current animation loop
        window.cancelAnimationFrame(animationId)
        isPages.initiated = true

        gsap.to('#overlappingDiv', {
          opacity: 1,
          yoyo: true,
          onComplete() {
            gsap.to('#overlappingDiv', {
              opacity: 1,
              onComplete() {
                initPageContent('education')
                gsap.to('#overlappingDiv', {
                  opacity: 0,
                })
              }
            })
          }
        })
        break;
      }
    }
    for (let i = 0; i < experienceZones.length; i++) {
      const experienceZone = experienceZones[i]
      if (rectangularCollision({
        rectangle1: player,
        rectangle2: experienceZone
      })) {
        // deactivate current animation loop
        window.cancelAnimationFrame(animationId)
        isPages.initiated = true

        gsap.to('#overlappingDiv', {
          opacity: 1,
          yoyo: true,
          onComplete() {
            gsap.to('#overlappingDiv', {
              opacity: 1,
              onComplete() {
                initPageContent('experience')
                gsap.to('#overlappingDiv', {
                  opacity: 0,
                })
              }
            })
          }
        })
        break;
      }
    }
    for (let i = 0; i < contactZones.length; i++) {
      const contactZone = contactZones[i]
      if (rectangularCollision({
        rectangle1: player,
        rectangle2: contactZone
      })) {
        // deactivate current animation loop
        window.cancelAnimationFrame(animationId)
        isPages.initiated = true

        gsap.to('#overlappingDiv', {
          opacity: 1,
          yoyo: true,
          onComplete() {
            gsap.to('#overlappingDiv', {
              opacity: 1,
              onComplete() {
                initPageContent('contact')
                gsap.to('#overlappingDiv', {
                  opacity: 0,
                })
              }
            })
          }
        })
        break;
      }
    }
    for (let i = 0; i < skillsZones.length; i++) {
      const skillsZone = skillsZones[i]
      if (rectangularCollision({
        rectangle1: player,
        rectangle2: skillsZone
      })) {
        // deactivate current animation loop
        window.cancelAnimationFrame(animationId)
        isPages.initiated = true

        gsap.to('#overlappingDiv', {
          opacity: 1,
          yoyo: true,
          onComplete() {
            gsap.to('#overlappingDiv', {
              opacity: 1,
              onComplete() {
                initPageContent('skills')
                gsap.to('#overlappingDiv', {
                  opacity: 0,
                })
              }
            })
          }
        })
        break;
      }
    }
  }

  //Aimation for player movement and collision detection
  if (keys.w.pressed && lastKey === 'w') {
    player.animate = true
    player.image = player.sprites.up


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
  } else if (keys.a.pressed && lastKey === 'a') {
    player.animate = true
    player.image = player.sprites.left


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
  } else if (keys.s.pressed && lastKey === 's') {
    player.animate = true
    player.image = player.sprites.down


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
  } else if (keys.d.pressed && lastKey === 'd') {
    player.animate = true
    player.image = player.sprites.right


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
  switch (e.key) {
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
