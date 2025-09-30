
const navList = document.getElementById('nav-list');
const barBtn = document.getElementById('bar-btn');
barBtn.addEventListener('click', (e) => {
    navList.classList.toggle('active');

    e.stopPropagation();
});

navList.addEventListener('click', (e) => {
    e.stopPropagation();
});

document.addEventListener("click", () => {
    navList.classList.remove('active');
})