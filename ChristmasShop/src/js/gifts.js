import { createHeader, createFooter } from './components/createHeader&Footer'
import '../styles/gifts.scss'
import '../styles/modal_window.scss'
import createCards from './components/createCards';
import gifts_list from './gifts.json' assert { type: 'json' };
import {createModal, closeModal} from './components/modalWIndow'
let tabClass = 'all';
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        function func(tabElement) {
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(t => {
                t.classList.remove('active');
                t.disabled = false;
            });
            tabElement.classList.add('active');
            tabElement.disabled = true;
            const tabClass = tabElement.id;
            renderElements(tabClass);
        }
        func(event.target); // Pass the current tab (from the loop) to the function
    });
});

function renderElements(tabClass) {
    let cards;
    document.querySelectorAll('.card').forEach(card => {
        card.remove();
    });
    if (tabClass === 'all') {
        cards = createCards(36, 'all');
        console.log(cards);
    }else{
        let list = gifts_list;
        let filtered = list.filter(item => (item.category).replace(/^For (\w+)$/, (match, p1) => `${p1.toLowerCase()}`).toLowerCase() == tabClass);
        cards = createCards(filtered.length, tabClass);
        console.log(cards);
    }
    cards.forEach(card => {
        document.querySelector('.cards').appendChild(card);
        card.addEventListener('click', (event) => {
            const currentCard = event.currentTarget;
            console.log(currentCard.id)
            createModal(gifts_list.find(item => item.id === Number(currentCard.id)
            ), currentCard.querySelector('img').src, window.getComputedStyle(currentCard.querySelector('h4')).color);
        })
    });
}

renderElements(tabClass);

createHeader();
createFooter();