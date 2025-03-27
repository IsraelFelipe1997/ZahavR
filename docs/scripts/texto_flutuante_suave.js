document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".scroll_animado_up");

    function checarScroll() {
        elementos.forEach((elemento) => {
            const posicao = elemento.getBoundingClientRect().top;
            const alturaTela = window.innerHeight * 0.8; // 80% da altura da tela

            if (posicao < alturaTela) {
                elemento.classList.add("ativo"); // Adiciona a animação
            } else {
                elemento.classList.remove("ativo"); // Remove ao rolar para cima
            }
        });
    }

    // Evento de rolagem para ativar a animação
    window.addEventListener("scroll", checarScroll);

    // Verifica no carregamento da página se já deve ativar a animação
    checarScroll();
});


