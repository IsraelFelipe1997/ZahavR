document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const closeBtn = document.getElementById("close-btn");

    // Quando clicar no botão do menu, ele aparece
    menuBtn.addEventListener("click", function () {
        menu.style.display = "block";
    });

    // Quando clicar no botão de fechar, ele desaparece
    closeBtn.addEventListener("click", function () {
        menu.style.display = "none";
    });

    // Fechar o menu se clicar fora dele (somente no mobile)
    document.addEventListener("click", function (event) {
        if (window.innerWidth < 1024) { // Só aplica essa regra no mobile
            if (!menu.contains(event.target) && event.target !== menuBtn) {
                menu.style.display = "none";
            }
        }
    });

    // Garantir que o menu volta ao modo desktop ao redimensionar a tela
    window.addEventListener("resize", function () {
        if (window.innerWidth >= 1024) {
            menu.style.display = "flex"; // Volta ao layout normal no desktop
        } else {
            menu.style.display = "none"; // Mantém escondido no mobile
        }
    });
});
