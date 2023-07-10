let crew;

const dots = document.querySelector('.dots');
const job = document.querySelector('.crew-info h2');
const person = document.querySelector('.crew-info p');
const personDesc = document.querySelector('.crew-info p:not([class])');
const distance = document.querySelector('#distance');
const travel = document.querySelector('#travel');
const personPicture = document.querySelector('#main picture');
const personSource = personPicture.querySelector('source');
const personImg = personPicture.querySelector('img');

const dotsList = dots.children;


async function fetchData() {
    await fetch('./data.json').then(response => response.json()).then((json => data = json));
}

// load data once window has loaded, set planets
window.onload = fetchData().then(() => {
    crew = [douglas, mark, victor, anousheh] = data.crew;
});

for (let i = 0; i < dotsList.length; i++) {
    dotsList[i].addEventListener('click', () => {
        // set active
        dotsList[i].ariaSelected = true;

        // remove active from other buttons
        for (let j = 0; j < dotsList.length; j++) {
            if (dotsList[i] != dotsList[j])
                dotsList[j].ariaSelected = false;
        }

        // set relative content
        job.innerHTML = crew[i].role;
        person.innerHTML = crew[i].name;
        personDesc.innerHTML = crew[i].bio;
        personSource.srcset = crew[i].images.webp;
        personImg.src = crew[i].images.png;
        personImg.alt = crew[i].name;
    });
}
