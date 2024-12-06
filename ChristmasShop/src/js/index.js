import { createHeader, createFooter } from './components/createHeader&Footer'
import '../styles/index.scss'
import '../styles/modal_window.scss'
import gifts_list from './gifts.json' assert { type: 'json' };
import createCards from './components/createCards'
import {createModal, closeModal} from './components/modalWIndow'
createHeader();
createFooter();

let cards = createCards(4, 'all');

for (let i = 0; i < cards.length; i++) {
    document.querySelector('.cards').appendChild(cards[i]);
    cards[i].addEventListener('click', (event) => {
        const currentCard = event.currentTarget;
        console.log(currentCard.id)
        createModal(gifts_list.find(item => item.id === Number(currentCard.id)
        ), currentCard.querySelector('img').src, window.getComputedStyle(currentCard.querySelector('h4')).color);
    })
}