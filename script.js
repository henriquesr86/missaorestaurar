document.addEventListener('DOMContentLoaded', function() {
    // --- 1. Animação do Título na Seção "Sobre" ---
    const animatedTitleElement = document.querySelector('.animated-title');
    const titleParts = [
        { text: "Missão", type: "bold" },
        { text: "Restaurar", type: "light" },
        { text: "•", type: "bullet" },
        { text: "Fé", type: "bold" },
        { text: "e", type: "light" },
        { text: "Comunidade", type: "bold" },
        { text: "•", type: "bullet" },
        { text: "Transformando", type: "light" },
        { text: "Vidas", type: "bold" },
        { text: "•", type: "bullet" }
    ];

    function createAnimatedTitle() {
        // Duplica o conteúdo para garantir um loop suave e contínuo
        const content = titleParts.map(part => {
            const span = document.createElement('span');
            span.textContent = part.text;
            if (part.type === "bold") {
                span.classList.add('white-bold');
            } else if (part.type === "light") {
                span.classList.add('light-gray');
            } else if (part.type === "bullet") {
                span.classList.add('bullet');
            }
            return span.outerHTML;
        }).join(' ');

        animatedTitleElement.innerHTML = content + content; // Duplica para o efeito de rolagem infinita
    }

    createAnimatedTitle(); // Chama a função para criar o título animado ao carregar a página

    // --- 2. Efeito de Fade-In Subindo para Elementos na Tela ---
    const fadeInElements = document.querySelectorAll('.fade-in-element');

    const observerOptions = {
        root: null, // Observa a viewport (janela de visualização)
        rootMargin: '0px', // Nenhuma margem extra
        threshold: 0.1 // O elemento se torna visível quando 10% dele está na viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se o elemento está na viewport, adiciona a classe para animar
                entry.target.classList.add('is-visible');
                // Opcional: Para que a animação ocorra apenas uma vez, descomente a linha abaixo
                // observer.unobserve(entry.target);
            } else {
                // Opcional: Se quiser que a animação se repita ao rolar para cima e para baixo
                // entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // Observa cada elemento com a classe 'fade-in-element'
    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});