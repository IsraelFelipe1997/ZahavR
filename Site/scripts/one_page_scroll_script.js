document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// scroll do botao saiba mais
document.getElementById('botao_sobre').addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do link
  
    const sobreSection = document.getElementById('sobre');
    sobreSection.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente
  });