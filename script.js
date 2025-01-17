const buttons = document.querySelectorAll('.button-section button');
const filterableCards = document.querySelectorAll('.filterable_cards .cards');

const filterCards = e => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    

    filterableCards.forEach(cards => {
        cards.classList.add('hide');

        if(cards.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all'){
            cards.classList.remove('hide');
        }
    });
}


buttons.forEach(button => button.addEventListener('click', filterCards));

