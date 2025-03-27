document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;

        let offsetTop = targetSection.offsetTop;

        // Verifica se a tela é menor que 768 pixels (dispositivo móvel)
        if (window.innerWidth < 768) {
            offsetTop -= headerHeight; // Aplica a correção apenas em dispositivos móveis considerando altura do header
        }

        window.scrollTo({
            top: offsetTop,
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