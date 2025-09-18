window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const floatingItems = document.querySelectorAll('.floating-item');
    
    floatingItems.forEach(item => {
        item.style.left = Math.random() * 80 + 10 + '%';
        item.style.top = Math.random() * 80 + 10 + '%';
        
        const duration = 15 + Math.random() * 15;
        item.style.animationDuration = duration + 's';
        item.style.animationDelay = Math.random() * 5 + 's';
    });
});