function classToggle() {
    const navs = document.querySelectorAll('.navbar')
    
    navs.forEach(nav => nav.classList.toggle('ToggleShow'));
  }
  
  document.querySelector('.toggle-bar')
    .addEventListener('click', classToggle);