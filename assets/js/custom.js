  const burger = document.querySelector("#btn-burger");
  const mobileContainer = document.querySelector("#mobile-container");
  const body = document.querySelector("#body");
  const langSelect = document.querySelector('.lang-select');
  const currentLangText = langSelect.querySelector('[data-current-lang] span');
  const langItems = langSelect.querySelectorAll('.lang-select__item');
  

  burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    mobileContainer.classList.toggle('show'); 
    body.classList.toggle('scroll-stop');
  })

  // Відкриття/Закриття списку
  langSelect.addEventListener('click', (e) => {
      langSelect.classList.toggle('is-active');
  });

  // Вибір мови
  langItems.forEach(item => {
      item.addEventListener('click', () => {
          const lang = item.getAttribute('data-lang');
          const text = item.textContent;

          // Оновлюємо відображення
          currentLangText.textContent = text;
          
          // Логіка зміни мови (як у попередньому повідомленні)
          console.log(`Мова змінена на: ${lang}`);
          
          // Зберігаємо в LocalStorage
          localStorage.setItem('selectedLang', lang);
      });
  });

  // Закриття при кліку поза межами селекта
  document.addEventListener('click', (e) => {
      if (!langSelect.contains(e.target)) {
          langSelect.classList.remove('is-active');
      }
  });

  
    