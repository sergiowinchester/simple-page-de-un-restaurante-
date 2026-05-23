    document.addEventListener('DOMContentLoaded', () => {
        // Seleccionamos los elementos
        const heroBtn = document.querySelector('.hero .btn-primary');
        const floatingBtn = document.querySelector('.floating-btn');

        if (heroBtn && floatingBtn) {
            // Creamos el observador
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    // Si el botón del hero YA NO está visible en pantalla 
                    // y el scroll es hacia abajo (boundingClientRect.top < 0)
                    if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                        floatingBtn.classList.add('visible');
                    } else {
                        // Si el botón del hero vuelve a estar visible
                        floatingBtn.classList.remove('visible');
                    }
                });
            }, {
                threshold: 0, // Se activa en el instante que el botón cruza el límite
            });

            // Ponemos a observar el botón del hero
            observer.observe(heroBtn);
        }
    });
