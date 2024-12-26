const acordions = document.querySelectorAll('.accordion');

acordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.acordion-body');
        body.classList.toggle('active');
    });
});


const modalOpen = document.querySelector('.jobs-bg');
const modal = document.querySelector('.modal');

modalOpen.addEventListener('click', (event) => {
    event.stopPropagation();
    modal.style.display = 'flex';
});

document.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
    event.stopPropagation();
});

