
animate()
animate()
function initPageContent() {
  const modalContainer = document.createElement('div')
  modalContainer.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 744px;
    height: 528px;
    background-image: url('./img/Paper_Craft.png');
    background-size: cover;
    z-index: 1000;
  `

  const closeButton = document.createElement('button')
  closeButton.className = 'closeButton'
  closeButton.innerHTML = 'X'

  const contentPage1 = document.createElement('div')
  contentPage1.className = 'page1'
  contentPage1.innerHTML = `
        <div class="page_title">PROJECTS</div>
        <div class="container">
           <div class="main-title">Book catalog</div>
           <div class="date-info">July - October 2024</div>
           <div class="description">
                Web application, with ability to 
                view the book, add
                new, edit, add notes
           </div>
        </div>
        <div class="container">
           <div class="main-title">User authorization system</div>
           <div class="date-info">November - December 2024</div>
           <div class="description">
                User authorization, authentication service with Redis caching and MongoDB integration
           </div>
       </div>
        <div class="container">
           <div class="main-title">Collaboro</div>
           <div class="date-info">January - February 2025</div>
           <div class="description">
                User authorization, authentication 
                microservice architecture with reactive programming (WebFlux), 
                JWT session management, Spring Security
           </div>
       </div>
  `
  const contentPage2 = document.createElement('div')
  contentPage2.className = 'page2'
  contentPage2.innerHTML = `
        <div class="page_title">SKILLS</div>
        <div class="container">
            <div class="skills">
                 Java, Spring(Boot, Web, MVC, REST), Hibernate, PostgreSQL, 
                    JUint, Mockito, Reflection API, Stream API, Generics API
            </div>
            <a href="https://github.com/VladislavDemchenko/BookCatalogWithSpringData" target="_blank" class="repositoryLink">GitHub Repository</a>
       </div>
        <div class="container">
            <div class="skills">
                 Java, Spring (Boot, Web, MVC), Redis, MongoDB, 
                    Stream API, Generics API
            </div>
            <a href="https://github.com/VladislavDemchenko/UserAuthSystem" target="_blank" class="repositoryLink">GitHub Repository</a>

       </div>
        <div class="container">
            <div class="skills">
                 Java, Spring(Boot, Web, MVC, REST), Hibernate, PostgreSQL, JUnit, Mockito, Reflection API, Stream API, Generic API, OOP, Lombok, GitHub, Maven
            </div>
            <a href="https://github.com/VladislavDemchenko/Collaboro" target="_blank" class="repositoryLink">GitHub Repository</a>
       </div>
  `

  modalContainer.appendChild(closeButton)
  modalContainer.appendChild(contentPage1)
  modalContainer.appendChild(contentPage2)
  document.body.appendChild(modalContainer)
  closeButton.onclick = () => {
    modalContainer.remove()
    battle.initiated = false
  }
  animate()
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

// animate()
// initBattle()
// animateBattle()

// document.querySelector('#dialogueBox').addEventListener('click', (e) => {
//   if (queue.length > 0) {
//     queue[0]()
//     queue.shift()
//   } else e.currentTarget.style.display = 'none'
// })
