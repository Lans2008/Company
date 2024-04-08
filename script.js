const card = document.querySelectorAll('.card');
const p = document.querySelector('.card p');
console.log(card);

card.addEventListener('onclick', function () {
    p.style.opacity = '1';
})
