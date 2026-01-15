  const burger = document.querySelector("#btn-burger");
  const mobileContainer = document.querySelector("#mobile-container");
  const body = document.querySelector("#body");


  burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    mobileContainer.classList.toggle('show');
    body.classList.toggle('scroll-stop');
  })