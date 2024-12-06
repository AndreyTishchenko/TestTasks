import createNavList from "./createNavList.js";
import createContactContainer from "./ContactContainer.js";
import Telegrammlogo from '../../assets/images/icons/telegram.svg'
import Facebooklogo from '../../assets/images/icons/facebook.svg'
import Instagramlogo from '../../assets/images/icons/instagram.svg'
import Xlogo from '../../assets/images/icons/X.svg'
import logoIcon from '../../assets/images/icons/logo.svg'
import createBurgerMenu from "./createBurgerMenu.js";
const paragraphs = ['GIFTS', 'ABOUT', 'BEST', 'CONTACTS']
export function createFooter() {
    const footer = document.createElement('footer');
    const contacts = createContactContainer();
    const addInfo = document.createElement('div');
    addInfo.classList.add('add-info');
    
    
    const Networks = document.createElement('div');

    const telegramm = document.createElement('a');
    const telegrammImg = document.createElement('img');
    telegrammImg.src = Telegrammlogo;
    telegrammImg.alt = 'telegram';
    telegramm.appendChild(telegrammImg);

    const facebook = document.createElement('a');
    const facebookImg = document.createElement('img');
    facebookImg.src = Facebooklogo;
    facebookImg.alt = 'facebookImg';
    facebook.appendChild(facebookImg);

    const instagramm = document.createElement('a');
    const instagrammImg = document.createElement('img');

    instagrammImg.src = Instagramlogo;
    instagrammImg.alt = 'instagram';
    instagramm.appendChild(instagrammImg);

    const twitter = document.createElement('a');
    const twitterImg = document.createElement('img');
    twitterImg.src = Xlogo;
    twitterImg.alt = 'twitter';
    twitter.appendChild(twitterImg);

    const Copyright = document.createElement('p');
    Copyright.textContent = '© Copyright 2025, All Rights Reserved';

    const mad_in = document.createElement('span');
    mad_in.textContent = 'Made in Rolling Scopes School';
    mad_in.classList.add('Caption')

    Networks.classList.add('Networks');
    Networks.appendChild(telegramm)
    Networks.appendChild(facebook)
    Networks.appendChild(instagramm)
    Networks.appendChild(twitter)

    addInfo.appendChild(Networks);
    addInfo.appendChild(Copyright);
    addInfo.appendChild(mad_in);

    footer.appendChild(contacts);
    footer.appendChild(addInfo);

    document.querySelector('.app').appendChild(footer)
}

export function createHeader() {
    const header = document.createElement('header');
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');

    const logo = document.createElement('a');
    logo.classList.add('logo');
    logo.href = './';

    const logoImg = document.createElement('img');
    logoImg.src = logoIcon;

    const logoText = document.createElement('span');
    logoText.classList.add('Action_Small');
    logoText.textContent = 'THE GIFTS';

    logo.appendChild(logoImg);
    logo.appendChild(logoText);

    const navList = createNavList(paragraphs);

    const burgerMenuButton = document.createElement('button');
    burgerMenuButton.classList.add('burger-menu-button');
    

    for (let i = 0; i < 2; i++) {
        const burgerMenuButtonLine = document.createElement('span');
        burgerMenuButton.appendChild(burgerMenuButtonLine);
    }

    headerContainer.appendChild(logo);
    headerContainer.appendChild(navList);
    headerContainer.appendChild(burgerMenuButton);
    
    createBurgerMenu(burgerMenuButton ,paragraphs);
    
    
    burgerMenuButton.addEventListener('click', () => {
        burgerMenuButton.classList.toggle('open');
        // menu.classList.toggle('open');
    });
    
    header.appendChild(headerContainer);
    document.querySelector('.app').prepend(header);
}