document.querySelectorAll('.item-link').forEach(button => {
    button.addEventListener('click', function(e) {
        this.style.animation = 'buttonPress 0.1s forwards';
        setTimeout(() => {
            this.style.animation = '';
        }, 100);
    });
});