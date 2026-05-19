const cards = document.querySelectorAll('.card-wrapper');

cards.forEach(wrapper => {
    const card = wrapper.querySelector('.card');
    const glare = wrapper.querySelector('.glare');

    wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left; // Sichqonchaning karta ichidagi X o'rni
        const y = e.clientY - rect.top;  // Sichqonchaning karta ichidagi Y o'rni

        // Markazga nisbatan burchaklarni hisoblash
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        // Kartani burish
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        // Yaltirash (glare) effektining joylashuvi
        glare.style.setProperty('--x', `${x}px`);
        glare.style.setProperty('--y', `${y}px`);
    });

    // Sichqoncha chiqib ketganda joyiga qaytarish
    wrapper.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
});