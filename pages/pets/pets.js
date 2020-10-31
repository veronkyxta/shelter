window.addEventListener('DOMContentLoaded', () => {
    const petsList = document.querySelector('.pets-list'),
    petsListItem = document.querySelectorAll('.pets-list__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        petsList.classList.toggle('pets-list_active');
    });

    petsListItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            petsList.classList.toggle('pets-list_active');
        })
    })
})
