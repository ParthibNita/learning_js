const form = document.querySelector('#forms');
const list = document.querySelector('.list');
const addButton = document.querySelector('#new');
const h2 = document.querySelector('h2');
const footer = document.querySelector('footer');
const button = document.querySelector('.bttn'); //add button


const addToList = () => {
    const li = document.createElement('li');

    //adding the note
    const div = document.createElement('div');
    div.innerText = `${addButton.value}`;

    //del button
    const btn = document.createElement('button');
    btn.classList.add('bttn', 'delButton');
    btn.innerText = 'del';
    div.append(btn);

    li.append(div);

    list.append(li);

    //back to blank
    addButton.value = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    h2.innerText = 'Your List';
    addToList();
})

list.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') e.target.closest('LI').remove();
    if (!list.childElementCount) h2.innerText = 'Your List will be displayed below';
})

const btn1 = document.querySelector('.finish');    //finish Button
const btn2 = document.querySelector('.newList');  //newList Button

const changes = (hideButton, displayButton, bool) => {
    hideButton.style.display = 'none';
    displayButton.style.display = 'block';
    button.disabled = bool; //add button disabled
}

btn1.addEventListener('click', () => {
    if (list.childElementCount) {
        h2.innerText = 'Your Final List';

        changes(btn1, btn2, true);

        button.classList.remove('bttn'); //add button color erased
        const delButton = document.querySelectorAll('.delButton'); //selecting the del button
        for (let i of delButton) i.remove();  //removing all the del button
    }

    else alert('Task oitto nai bal');
})

btn2.addEventListener('click', () => {
    h2.innerText = 'Your List will be displayed below';

    changes(btn2, btn1, false);

    button.classList.add('bttn');

    //list
    list.innerText = '';

})