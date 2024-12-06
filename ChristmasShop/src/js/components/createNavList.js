export default function createNavList(paragraphs){
    const nav = document.createElement('nav');
    const navList = document.createElement('ul');
    const page = window.location.pathname.split('/').pop();
    for (let i = 0; i < paragraphs.length; i++) {
        const li = document.createElement('li');
        if (paragraphs[i] === 'GIFTS') {
            if(page == 'gifts.html'){
                li.classList.add('active');
            }
        }
        const a = document.createElement('a');
        if (paragraphs[i] === 'GIFTS') {
            if(page == 'gifts.html'){
                li.classList.add('active');
            }else{
                a.href = `./${paragraphs[i].toLowerCase()}.html`;
            }
        }else{
            a.href = `./index.html#${paragraphs[i].toLowerCase()}`;
        }
        li.classList.add('nav-item');
        a.classList.add('nav-link', 'Action_Small');
        a.textContent = paragraphs[i];
        li.appendChild(a);
        navList.appendChild(li);
    }
    nav.appendChild(navList);
    return nav;
}