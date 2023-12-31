// destination page

let data;
let moon;
let mars;
let europa;
let titan;
let planets;

const planetTitle = document.querySelector('.destination-info h2');
const planetDesc = document.querySelector('.destination-info p:not([class])');
const distance = document.querySelector('#distance');
const travel = document.querySelector('#travel');
const planetPicture = document.querySelector('#main picture');
const planetSource = planetPicture.querySelector('source');
const planetImg = planetPicture.querySelector('img');


const moonBtn = document.getElementById('moon');
const marsBtn = document.getElementById('mars');
const europaBtn = document.getElementById('europa');
const titanBtn = document.getElementById('titan');

const tabList = [moonBtn, marsBtn, europaBtn, titanBtn];

async function fetchData() {
    await fetch('./data.json').then(response => response.json()).then((json => data = json));
}

// load data once window has loaded, set planets
window.onload = fetchData().then(() => {
    planets = [moon, mars, europa, titan] = data.destinations;
    
});

for (let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', () => {
        // set active
        tabList[i].ariaSelected = true;

        // remove active from others
        tabList.forEach(item => {
            if (item != tabList[i])
                item.ariaSelected = false;
        });

        // set relative content
        planetTitle.innerHTML = planets[i].name;
        planetDesc.innerHTML = planets[i].description;
        distance.innerHTML = planets[i].distance;
        travel.innerHTML = planets[i].travel;
        planetSource.srcset = planets[i].images.webp;
        planetImg.src = planets[i].images.png;
        planetImg.alt = planets[i].name;
    });
}
