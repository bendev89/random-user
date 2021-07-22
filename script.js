const main = document.getElementById('main');
const addPersonBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const millionnaireBtn = document.getElementById('millionnaire');
const sortBtn = document.getElementById('sort');
const totalBtn = document.getElementById('total');


let data =[];

async function getRandomPerson() {
    const res = await fetch('https://randomuser.me/api');
    ;
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
     data.push(obj);
     updateDom();
 }

 function updateDom(persons = data) {
     main.innerHTML = "<h2><strong>Personne</strong> Fortune</h2>";
     persons.forEach(item => {
         const element = document.createElement('div');
         element.classList.add('person')
         element.innerHTML =`<div><img src="${item.image}" >
          <strong>${item.name}</strong></div> 
          <p>${item.wealth} €</p>`;
          main.appendChild(element);

     });
 }
 function doubleMoney() {
    data = data.map((person)=>{
        return {...person, wealth:person.wealth * 2};
    })
    updateDom();
     
 }
function sortByRichest() {
    data.sort((a, b) => b.wealth - a.wealth);
    updateDom();
}
function showMillionnaires() {
    data = data.filter( person => person.wealth > 1000000);
    updateDom();
}

function calculatTotal() {
    const totalWealth = data.reduce((acc, person) => (acc += person.wealth), 0);
    console.log(totalWealth);
    const totalEl = document.createElement('div');
    totalEl.classList.add('total');
    totalEl.innerHTML = `<h3>Total des fortunes <strong>${totalWealth} €</strong></h3>`;
    main.appendChild(totalEl);
}


 getRandomPerson();
 addPersonBtn.addEventListener('click', getRandomPerson);
 doubleBtn.addEventListener('click', doubleMoney);
 sortBtn.addEventListener('click', sortByRichest);
 millionnaireBtn.addEventListener('click', showMillionnaires);
 totalBtn.addEventListener('click', calculatTotal);
 