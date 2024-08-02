let bar = document.querySelector('.bar');
let monthly = document.querySelector('.monthlyCards');
let yearly = document.querySelector('.yearlyCards');

let isAtStart = true;

bar.addEventListener('click', () => {
    anime({
        targets: '.circle',
        translateX: isAtStart ? 40 : 0,
        duration: 500,
        easing: 'easeInOutQuad'
    });

    // monthlyCards ve yearlyCards görünürlüğünü değiştir
    if (isAtStart) {
        monthly.classList.remove('active');
        monthly.classList.add('hidden');
        yearly.classList.remove('hidden');
        yearly.classList.add('active');
    } else {
        monthly.classList.remove('hidden');
        monthly.classList.add('active');
        yearly.classList.remove('active');
        yearly.classList.add('hidden');
    }

    isAtStart = !isAtStart;
});