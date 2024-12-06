import gifts_list from '../gifts.json' assert { type: 'json' };
import harmonyImg from '../../assets/images/gift-for-harmony.png'
import healthImg from '../../assets/images/gift-for-health.png'
import workImg from '../../assets/images/gift-for-work.png'


function fisherYatesShuffle(array) {
    let currentIndex = array.length - 1
    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // Обмен элементов
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function createCards (amount_of_cards, category){
    let cards_for_choose;
    
    let cards = [];
    if (category === 'all') {
        cards_for_choose = gifts_list;
    }else {
        cards_for_choose = gifts_list.filter(item => ((item.category).replace(/^For (\w+)$/, (match, p1) => `${p1.toLowerCase()}`).toLowerCase()) === category.toLowerCase());
        // console.log(category);
    }
    const shuffledCards = fisherYatesShuffle(cards_for_choose);
    for (let i = 0; i < amount_of_cards; i++) {
        let cradTemplate =  cards_for_choose[i];
        let Card_category = (cradTemplate.category).replace(/^For (\w+)$/, (match, p1) => `${p1.toLowerCase()}`);

        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add(Card_category);
        card.id = cradTemplate.id;
        
        const cardImg = document.createElement('img');
        
        switch (Card_category){
            case 'work':
                cardImg.src = workImg;
                break;
            case 'health':
                cardImg.src = healthImg;
                break;
            case 'harmony':
                cardImg.src = harmonyImg;
                break;
        }
        const textArea = document.createElement('div');
        textArea.classList.add('text_area');
        
        const cardTitle = document.createElement('h4');
        cardTitle.textContent = cradTemplate.category;
        const cardName  = document.createElement('h3');
        cardName.textContent = cradTemplate.name;
        
        textArea.appendChild(cardTitle);
        textArea.appendChild(cardName);
        
        card.appendChild(cardImg);
        card.appendChild(textArea);
        cards.push(card);
    }
    
    return cards;
}
export default createCards