window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const container = document.getElementById('container');

    // Modificando a intensidade do brilho de acordo com a rolagem
    let brightness = 100 + scrollPosition / 10;
    let blur = 5 + scrollPosition / 50;

    // Alterando a cor e a intensidade do brilho
    container.style.filter = `brightness(${brightness}%) blur(${blur}px)`;

    // Modificando o fundo gradiente para refletir o movimento
    let gradientSize = 100 + scrollPosition / 2;
    container.style.background = `radial-gradient(circle, rgba(255,255,255,0.2) ${gradientSize}%, rgba(0,0,0,0.5) 100%)`;
});
