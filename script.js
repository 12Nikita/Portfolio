document.addEventListener("DOMContentLoaded", () => {
  
  const aboutText = `I’m an aspiring Computer Engineering Graduate passionate about building intuitive, scalable, and reliable digital experiences.

Over the past year, I’ve explored multiple areas across the product lifecycle, from designing clean, user-focused interfaces to developing full-stack web and mobile apps using React, React Native, JavaScript and Firebase. My recent project, GoLocal, simulates real-world hyperlocal vendor interactions and helped me dive deep into development, design thinking, and debugging.

I’m currently looking for opportunities where I can learn, contribute, and grow. I bring adaptability, curiosity, and a strong foundation in both code and creativity.`;

  const aboutTextElement = document.getElementById("about-text");
  let currentIndex = 0;

 
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      function typeWriter() {
        if (currentIndex < aboutText.length) {
          aboutTextElement.innerHTML += aboutText.charAt(currentIndex);
          currentIndex++;
          setTimeout(typeWriter, 20); 
        }
      }
      typeWriter();
      observer.disconnect(); 
    }
  }, {
    threshold: 0.5, // 
  });

  observer.observe(aboutTextElement);

  
  const overlay = document.getElementById("overlay");
  const viewProjectButtons = document.querySelectorAll(".view-btn");
  const allProjectCards = document.querySelectorAll(".project-card");

  viewProjectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const parentCard = button.closest(".project-card");

     
      allProjectCards.forEach((card) => card.classList.remove("active"));

     
      parentCard.classList.add("active");
      overlay.classList.add("show");
    });
  });

  overlay.addEventListener("click", () => {
    allProjectCards.forEach((card) => card.classList.remove("active"));
    overlay.classList.remove("show");
  });
});
