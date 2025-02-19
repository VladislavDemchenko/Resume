// const battleBackgroundImage = new Image()
// battleBackgroundImage.src = './img/Paper_Craft.png'
// const battleBackground = new Sprite({
//   position: {
//     x: 0,
//     y: 0
//   },
//   image: battleBackgroundImage
// })

let draggle
let emby
let renderedSprites
// let battleAnimationId
let queue



function initBattle() {
  const modalContainer = document.createElement('div')
  modalContainer.style.cssText = `
    position: fixed;
    top: 220;
    left: 550;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 700px;
    background-image: url('./img/Paper_Craft.png');
    background-size: cover;
    border-radius: 10px;
    padding: 20px;
    z-index: 1000;
  `

  const closeButton = document.createElement('button')
  closeButton.innerHTML = 'X'
  closeButton.style.cssText = `
    position: fixed;
    top: 200px;
    right: 88px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    padding: 5px 10px;
  `

  const content = document.createElement('div')
  content.innerHTML = 'Ваш текст тут'
  content.style.cssText = `
    color: black;
    text-align: center;
    margin-top: 40px;
  `

  modalContainer.appendChild(closeButton)
  modalContainer.appendChild(content)
  document.body.appendChild(modalContainer)

  closeButton.onclick = () => {
    modalContainer.remove()
    battle.initiated = false
  }
  // animate()
  // document.querySelector('#userInterface').style.display = 'block'
  // document.querySelector('#dialogueBox').style.display = 'none'
  // document.querySelector('#enemyHealthBar').style.width = '80%'
  // document.querySelector('#playerHealthBar').style.width = '80%'
  // document.querySelector('#attacksBox').replaceChildren()

  // draggle = new Monster(monsters.Draggle)
  // emby = new Monster(monsters.Emby)
  // renderedSprites = [draggle, emby]
  // queue = []

  // emby.attacks.forEach((attack) => {
  //   const button = document.createElement('button')
  //   button.innerHTML = attack.name
  //   document.querySelector('#attacksBox').append(button)
  // })

  // our event listeners for our buttons (attack)
  // document.querySelectorAll('button').forEach((button) => {
  //   button.addEventListener('click', (e) => {
  //     const selectedAttack = attacks[e.currentTarget.innerHTML]
  //     emby.attack({
  //       attack: selectedAttack,
  //       recipient: draggle,
  //       renderedSprites
  //     })
  //
  //     if (draggle.health <= 0) {
  //       queue.push(() => {
  //         draggle.faint()
  //       })
  //       queue.push(() => {
  //         // fade back to black
  //         gsap.to('#overlappingDiv', {
  //           opacity: 1,
  //           onComplete: () => {
  //             cancelAnimationFrame(battleAnimationId)
  //             animate()
  //             document.querySelector('#userInterface').style.display = 'none'
  //
  //             gsap.to('#overlappingDiv', {
  //               opacity: 0
  //             })
  //
  //             battle.initiated = false
  //             audio.Map.play()
  //           }
  //         })
  //       })
  //     }
  //
  //     // draggle or enemy attacks right here
  //     const randomAttack =
  //       draggle.attacks[Math.floor(Math.random() * draggle.attacks.length)]
  //
  //     queue.push(() => {
  //       draggle.attack({
  //         attack: randomAttack,
  //         recipient: emby,
  //         renderedSprites
  //       })
  //
  //       if (emby.health <= 0) {
  //         queue.push(() => {
  //           emby.faint()
  //         })
  //
  //         queue.push(() => {
  //           // fade back to black
  //           gsap.to('#overlappingDiv', {
  //             opacity: 1,
  //             onComplete: () => {
  //               cancelAnimationFrame(battleAnimationId)
  //               animate()
  //               document.querySelector('#userInterface').style.display = 'none'
  //
  //               gsap.to('#overlappingDiv', {
  //                 opacity: 0
  //               })
  //
  //               battle.initiated = false
  //               audio.Map.play()
  //             }
  //           })
  //         })
  //       }
  //     })
  //   })

  //   button.addEventListener('mouseenter', (e) => {
  //     const selectedAttack = attacks[e.currentTarget.innerHTML]
  //     document.querySelector('#attackType').innerHTML = selectedAttack.type
  //     document.querySelector('#attackType').style.color = selectedAttack.color
  //   })
  // })
}

function animateBattle() {
  battleAnimationId = window.requestAnimationFrame(animateBattle)
  battleBackground.draw()

  console.log(battleAnimationId)

  // renderedSprites.forEach((sprite) => {
  //   sprite.draw()
  // })
}

animate()
// initBattle()
// animateBattle()

// document.querySelector('#dialogueBox').addEventListener('click', (e) => {
//   if (queue.length > 0) {
//     queue[0]()
//     queue.shift()
//   } else e.currentTarget.style.display = 'none'
// })
