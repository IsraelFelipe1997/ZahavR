function manterUltimoFrame() {
    let video = document.querySelector(".slogan-video");
    video.pause(); // Pausa o vídeo ao terminar
    video.currentTime = video.duration; // Mantém no último frame
}

// Função para verificar se a seção #inicio está visível no topo da página
function verificarScrollParaInicio() {
    const inicioSection = document.getElementById("inicio");
    const video = document.querySelector(".slogan-video");

    if (inicioSection && video) {
        const rect = inicioSection.getBoundingClientRect();

        // Se a seção #inicio estiver totalmente visível no topo
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            video.currentTime = 0; // Reinicia o vídeo
            video.play();
        }
    }
}

// Adiciona um evento de scroll para monitorar quando o usuário retorna ao início
document.addEventListener("scroll", verificarScrollParaInicio);
