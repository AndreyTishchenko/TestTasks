import ContactBlock from "./renderContactBlock";
import santaCLaus from '../../assets/images/santa-claus.png'
import ChristmasTree from '../../assets/images/christmas-tree.png'
import snake from '../../assets/images/snake.png'

export default function createContactContainer() {
    const contactContainer = document.createElement('div');
    contactContainer.id = 'contacts'
    const PhoneContainer = ContactBlock(santaCLaus, 'santa', 'Call Us', '+375 (29) 111-22-33', 'phone')
    const PlaceContainer = ContactBlock(ChristmasTree, 'funny Christmas tree', 'meet us', 'Magic forest', 'adress')
    const mailContainer = ContactBlock(snake, 'snake', 'write us', 'gifts@magic.com', 'mail')
    contactContainer.appendChild(PhoneContainer);
    contactContainer.appendChild(PlaceContainer);
    contactContainer.appendChild(mailContainer);
    return contactContainer;
}