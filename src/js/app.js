import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
    
    const el = document.createElement('article');
    const el1 = document.createElement('article');
    const el2 = document.createElement('article');
    const el3 = document.createElement('article');
    const el4 = document.createElement('article');
    
    
    el.classList.add('message');
    el1.classList.add('message');
    el2.classList.add('message');
    el3.classList.add('message');
    el4.classList.add('message');
    
  });
});
