
animate()
animate()
function initPageContent(type) {

  const left_container = document.querySelector('.left-container');
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


  const contentPage1 = document.createElement('div')
  const contentPage2 = document.createElement('div')
  switch(type) {
    case 'projects':
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
      break;
    case 'education':
      contentPage1.className = 'education_container'
      contentPage1.innerHTML = contentPage1.innerHTML = `
       <div class="parchment">
          <div class="resume-content">
            <div class="resume-section">
              <h2 class="section-title">EDUCATION</h2>
              
              <div class="item">
                <h3 class="item-title">Computer Science</h3>
                <p class="item-subtitle">STU | State Tax University</p>
                <p class="item-date">2021 - 2025</p>
                <div class="pixel-divider">
                  <div class="pixel-dot pixel-dot-left"></div>
                  <div class="pixel-dot pixel-dot-right"></div>
                </div>
              </div>
              
              <div class="item">
                <h3 class="item-title">Java course</h3>
                <p class="item-subtitle">JavaRush</p>
                <p class="item-date">2021 - 2022</p>
                <div class="pixel-divider">
                  <div class="pixel-dot pixel-dot-left"></div>
                  <div class="pixel-dot pixel-dot-right"></div>
                </div>
              </div>
              
              <div class="item">
                <h3 class="item-title">Java Script course</h3>
                <p class="item-subtitle">Genius space</p>
                <p class="item-date">2024 November - December</p>
                <div class="pixel-divider">
                  <div class="pixel-dot pixel-dot-left"></div>
                  <div class="pixel-dot pixel-dot-right"></div>
                </div>
              </div>
            </div>
            
            
            <div class="resume-section">
              <h2 class="section-title">CERTIFICATIONS</h2>
              
              <div class="item">
                <h3 class="item-title">Prometheus</h3>
                <p class="item-info">Git for distributed software development</p>
                <a href="https://drive.google.com/file/d/1zj94qmYqQV0lGPbR3pHgfRVw6Ba3muUQ/view?usp=sharing" target="_blank" class="item-link">link</a>
                <div class="pixel-divider">
                  <div class="pixel-dot pixel-dot-left"></div>
                  <div class="pixel-dot pixel-dot-right"></div>
                </div>
                <p class="item-info">Fundamentals of team and project management</p>
                <a href="https://drive.google.com/file/d/1pfTTxaSWgSRly9Qd7Ay6IvJKQQXl8eZP/view?usp=sharing" target="_blank" class="item-link">link</a>
              </div>
              
              <div class="item">
                <h3 class="item-title">Cisco</h3>
                <p class="item-info">Introduction to Networks course from Cisco</p>
                <a href="https://drive.google.com/file/d/15Bsfmo1Ahlum2PunXt0j4DBMg3X-Qr_T/view?usp=sharing" target="_blank" class="item-link">link</a>
              </div>
            </div>
          </div>
        </div>
        `
      break;
    case 'skills':
      contentPage1.className = 'education_container'
      contentPage1.innerHTML = contentPage1.innerHTML = `
       <div class="parchment">
          <div class="resume-content">
            <div class="resume-section">
              <h2 class="section-title">Java SKILLS</h2>
              
              <div class="item">
<!--                <h3 class="item-title">STU | State Tax University</h3>-->
                <div class="pixel-divider">
                  <div class="pixel-dot pixel-dot-left"></div>
                  <div class="pixel-dot pixel-dot-right"></div>
                </div>
               <p class="item-info skills-item-info">Java (Core 8+),

                Spring (Boot, Web, MVC, Rest, 
                Data, Cloud, Security, Redis),
                
                Hibernate,
                
                PostgresSQl, MongoDB, MySQL,
                
                Microservice (Resilience4j, 
                RabbitMQ, Openfeign),
                
                JWT,                
                
                JUnit, Mockito,
                
                Apache Velocity</p>
                <div class="pixel-divider">
                  <div class="pixel-dot pixel-dot-left"></div>
                  <div class="pixel-dot pixel-dot-right"></div>
                </div>
              </div>
              
<!--              <div class="item">-->
<!--                <h3 class="item-title">JavaRush curse</h3>-->
<!--                <div class="pixel-divider">-->
<!--                  <div class="pixel-dot pixel-dot-left"></div>-->
<!--                  <div class="pixel-dot pixel-dot-right"></div>-->
<!--                </div>-->
<!--               <p class="item-info">Java Syntax, Java (Core 8+), Java Multithreading, Java Collections</p>-->
<!--              </div>-->
            </div>
            
            <div class="resume-section">
              <h2 class="section-title">Addition SKILLS</h2>
              <div class="item">
<!--                <h3 class="item-title">STU | State Tax University</h3>-->
                <div class="pixel-divider">
                  <div class="pixel-dot pixel-dot-left"></div>
                  <div class="pixel-dot pixel-dot-right"></div>
                </div>
               <p class="item-info skills-item-info">
                JavaScript, HTML, CSS,
              
                Kotlin,
                          
                Redis caching,
                
                XML, JSON,
                                
                Maven, Gradle, Git,
                
                basic knowledge of C#, Python
               
                </p>
                <div class="pixel-divider">
                  <div class="pixel-dot pixel-dot-left"></div>
                  <div class="pixel-dot pixel-dot-right"></div>
                </div>
              </div>
            </div>
            `
      break;
    case 'experience':
      console.log('Loading experience page'); // Лог для education
      // ваш код дwsaaля education
      break;
    case 'contact':
      console.log('Loading contact page'); // Лог для education
      // ваш код для education
      break;
    default:
      console.log('Unknown page type:', type); // Лог для невідомого типу
  }

  const closeButton = document.createElement('button')
  closeButton.className = 'closeButton'
  closeButton.innerHTML = 'X'

  modalContainer.appendChild(closeButton)
  modalContainer.appendChild(contentPage1)
  modalContainer.appendChild(contentPage2)
  left_container.appendChild(modalContainer)
  closeButton.onclick = () => {
    modalContainer.remove()
    isPages.initiated = false
  }
  animate()
}

