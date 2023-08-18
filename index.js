// Services section
var servicesSection = document.getElementById('services');
var firstServiceItem = document.getElementById('item1');
var secondServiceItem = document.getElementById('item2');
var thirdServiceItem = document.getElementById('item3');
var fourthServiceItem = document.getElementById('item4');

var servicesAnimationOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.5 // Trigger animation when at least 50% of the element is visible
};

var servicesAnimationTriggered = false; // Flag to track animation triggering

function animateServicesSection(entries, observer) {
  if (!servicesAnimationTriggered) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        firstServiceItem.classList.add('animate__animated', 'animate__fadeInLeft');
        secondServiceItem.classList.add('animate__animated', 'animate__fadeInLeft');
        thirdServiceItem.classList.add('animate__animated', 'animate__fadeInRight');
        fourthServiceItem.classList.add('animate__animated', 'animate__fadeInRight');
        servicesAnimationTriggered = true;
      }
    });
  }
}

var servicesObserver = new IntersectionObserver(animateServicesSection, servicesAnimationOptions);
servicesObserver.observe(servicesSection);


// About section
var aboutSection = document.getElementById('about-section');
var aboutLeft = document.getElementById('about-left-section');
var aboutRight = document.getElementById('about-right-section');

var aboutAnimationOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.6 // Trigger animation when at least 80% of the element is visible
};

var aboutAnimationTriggered = false; // Flag to track animation triggering

function animateAboutSection(entries, observer) {
  if (!aboutAnimationTriggered) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutLeft.classList.add('animate__animated', 'animate__fadeInUp');
        aboutRight.classList.add('animate__animated', 'animate__fadeInUp');
        aboutAnimationTriggered = true;
      }
    });
  }
}

var aboutObserver = new IntersectionObserver(animateAboutSection, aboutAnimationOptions);
aboutObserver.observe(aboutSection);

//Expert Section Animation

var expertsSection = document.getElementById('expert-section');
var firstExpert = document.getElementById('expert1');
var secondExpert = document.getElementById('expert2');
var thirdExpert = document.getElementById('expert3');
var fourthExpert = document.getElementById('expert4');

var expertAnimationOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.5 // Trigger animation when at least 50% of the element is visible
};

var expertAnimationTriggered = false; // Flag to track animation triggering

function animateExpertSection(entries, observer) {
  if (!expertAnimationTriggered) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        firstExpert.classList.add('animate__animated', 'animate__fadeInLeft');
        secondExpert.classList.add('animate__animated', 'animate__fadeInLeft');
        thirdExpert.classList.add('animate__animated', 'animate__fadeInRight');
        fourthExpert.classList.add('animate__animated', 'animate__fadeInRight');
        expertAnimationTriggered = true;
      }
    });
  }
}

var expertObserver = new IntersectionObserver(animateExpertSection, expertAnimationOptions);
expertObserver.observe(expertsSection);

var projectsSection = document.getElementById('projects-section');
var allProjects = document.getElementById('all-projects');

var projectsAnimationOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.6 // Trigger animation when at least 60% of the element is visible
};

var projectsAnimationTriggered = false; // Flag to track animation triggering

function animateProjectsSection(entries, observer) {
  if (!projectsAnimationTriggered) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        allProjects.classList.add('animate__animated', 'animate__fadeInUp');
        projectsAnimationTriggered = true;
      }
    });
  }
}

var projectsObserver = new IntersectionObserver(animateProjectsSection, projectsAnimationOptions);
projectsObserver.observe(projectsSection);

//Testimonials Animation

var testimonialSection = document.getElementById('testimonial-section');
var stars = document.querySelectorAll('.stars svg');

var starsAnimationOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.7 // Trigger animation when at least 60% of the element is visible
};

var starsAnimationTriggered = false; // Flag to track animation triggering

function animateStars(entries, observer) {
  if (!starsAnimationTriggered) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stars.forEach(star => {
          star.classList.add('animate__animated', 'animate__rotateIn');
        });
        starsAnimationTriggered = true;
      }
    });
  }
}

var starsObserver = new IntersectionObserver(animateStars, starsAnimationOptions);
starsObserver.observe(testimonialSection);

//FAQ Section

document.addEventListener("DOMContentLoaded", function () {
  const questionDivs = document.querySelectorAll('.question');

  questionDivs.forEach((questionDiv) => {
      const svgIcon = questionDiv.querySelector('svg');
      const answerDiv = questionDiv.querySelector('div[id^="q"]');
      svgIcon.addEventListener('click', () => {
          answerDiv.classList.toggle('q1-hidden');
          

          if (answerDiv.classList.contains('q1-hidden')) {
            answerDiv.classList.remove('q-default');
              svgIcon.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M6.0001 7.7002L12.0001 13.7002L18.0001 7.7002L20.4001 8.9002L12.0001 17.3002L3.6001 8.9002L6.0001 7.7002Z" fill="#333333"/>
          </svg>
              `;
          } else {
            answerDiv.classList.add('q-default')
              svgIcon.innerHTML = `
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M17.9999 17.2998L11.9999 11.2998L5.9999 17.2998L3.5999 16.0998L11.9999 7.69981L20.3999 16.0998L17.9999 17.2998Z" fill="#333333"/>
                  </svg>
              `;
          }
      });
  });
});

