document.querySelectorAll('a[home^="#"]','a[contact^="#"]','a[about^="#"]','a[service^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
