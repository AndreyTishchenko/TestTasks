export default function ContactBlock(img, alt, title, data, className) {
    const ContactBlock = document.createElement('div');
    ContactBlock.classList.add(className);
    ContactBlock.classList.add('ContactBlock');
    const image = document.createElement('img');
    image.src = img;
    image.alt = alt;
    const titleText = document.createElement('h3');
    const dataText = document.createElement('span');
    dataText.classList.add('Action_Large');
    titleText.textContent = title;
    dataText.textContent = data;
    ContactBlock.appendChild(image);
    ContactBlock.appendChild(dataText);
    ContactBlock.appendChild(titleText);
    return ContactBlock;
}