const main = document.getElementById('main');
const addPersonBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const millionnaireBtn = document.getElementById('millionnaire');
const sortBtn = document.getElementById('sort');
const totalBtn = document.getElementById('total');

let data =[];

async function getRandomPerson() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const person = data.results[0];
    
    const newPerson = {
        name : ` ${person.name.first} ${person.name.last} `,
        image: `${person.picture.thumbnail}`,
        wealth: Math.floor(Math.random() * 1000000)
    }
    addPerson(newPerson);
     
}

function addPerson(obj) {
    data.push(obj)
}