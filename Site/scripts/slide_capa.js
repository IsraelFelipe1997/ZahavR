document.addEventListener("DOMContentLoaded", function () {
    const imagens = [
        "images/capa/slide/01_obra.png",
        "images/capa/slide/02_obra.png",
        "images/capa/slide/03_obra.png"
    ];

    let index = 0;
    const section = document.getElementById("inicio");
    const indicadoresContainer = document.querySelector(".indicadores");
    let intervalo; // Variável para armazenar o setInterval

    // Criar os indicadores
    imagens.forEach((_, i) => {
        const indicador = document.createElement("div");
        indicador.classList.add("indicador");
        if (i === 0) indicador.classList.add("ativo");
        indicador.dataset.index = i;

        indicador.addEventListener("click", function () {
            index = parseInt(this.dataset.index);
            mudarImagem(true); // Passa "true" para indicar que foi um clique manual
        });

        indicadoresContainer.appendChild(indicador);
    });

    const indicadores = document.querySelectorAll(".indicador");

    function mudarImagem(porClique = false) {
        section.classList.add("blurring");

        setTimeout(() => {
            section.style.backgroundImage = `linear-gradient(to bottom, rgba(242, 211, 53, 0.8), rgba(75, 75, 77, 0.8)), url(${imagens[index]})`;

            // Atualizar indicadores
            indicadores.forEach((indicador, i) => {
                indicador.classList.toggle("ativo", i === index);
            });

            section.classList.remove("blurring");

            if (!porClique) {
                index = (index + 1) % imagens.length;
            } else {
                reiniciarIntervalo();
            }
        }, 800);
    }

    function iniciarSlide() {
        intervalo = setInterval(() => {
            mudarImagem();
            index = (index + 1) % imagens.length;
        }, 5000);
    }

    function reiniciarIntervalo() {
        clearInterval(intervalo);
        iniciarSlide();
    }

    // Define a primeira imagem corretamente
    section.style.backgroundImage = `linear-gradient(to bottom, rgba(242, 211, 53, 0.8), rgba(75, 75, 77, 0.8)), url(${imagens[0]})`;
    indicadores[0].classList.add("ativo");

    iniciarSlide(); // Inicia o loop automático
});
