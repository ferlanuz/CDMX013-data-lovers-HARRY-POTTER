import data from "./data/harrypotter/data.js";
import functions from "./funciones.js";

let info = data.characters;


getData(info);

//sacamos la información especifica para crear las tarjetas
function getData(info) {

    for(let i=0 ; i< info.length ; i++){

        //hacemos destructuring para la información
        let {name, birth, species, house} = info[i];

        //Función que hace las tarjetas
        generateCard(name, birth, species, house);
    }
}




//EVENTO ORDENAR DATA A-Z
const btnOrder = document.querySelector('.alphabetic');
btnOrder.addEventListener('click', function (){

    cleanSection();

    //IMPRIMIENDO LA INFORMACIÓN EN EL DOM
    for(let i=0 ; i< functions.sortOrder(info).length ; i++){

        //hacemos destructuring para la información
        let {name, birth, species, house} = functions.sortOrder(info)[i];
        
        //Función que hace las tarjetas
        generateCard(name, birth, species, house);
    }  
})




//EVENTO ORDENAR DATA Z-A
const btnOrderReverse = document.querySelector('.alphabeticReverse');
btnOrderReverse.addEventListener('click', function (){

    cleanSection();

    //IMPRIMIENDO LA INFORMACIÓN EN EL DOM
    for(let i=0 ; i< functions.sortOrderReverse(info).length ; i++){

        //hacemos destructuring para la información
        let {name, birth, species, house} = functions.sortOrderReverse(info)[i];

        //Función que hace las tarjetas
        generateCard(name, birth, species, house);
    }
})




//GENERADOR DE TARJETAS
function generateCard(name, birth, species, house) {
    
    const section = document.querySelector('section');

    //creamos los elementos a insertar en el DOM
    const fatherCards = document.createElement('div');
    fatherCards.setAttribute('id','card');

    const cardColors = document.createElement('div');
    cardColors.classList.add('cardColors');

    //Colores de tarjetas
      const cardGryffindor = document.createElement('canvas');
      cardGryffindor.classList.add('color-Red');
      const cardSlytherin = document.createElement('canvas');
      cardSlytherin.classList.add('color-Green');
      const cardRavenclaw = document.createElement('canvas');
      cardRavenclaw.classList.add('color-Blue');
      const cardHufflepuff = document.createElement('canvas');
      cardHufflepuff.classList.add('color-Yellow');
      const cardHuman = document.createElement('canvas');
      cardHuman.classList.add('color-Human');
      const cardSpecies = document.createElement('canvas');
      cardSpecies.classList.add('color-Species');
      const colorWhite = document.createElement('canvas');
      colorWhite.classList.add('colorWhite');

    const imgWand = document.createElement('img');
    imgWand.classList.add('cardImg');
    imgWand.src = "./img/magic-wand 1varita.png";
    imgWand.alt = 'wand';

    const cardText = document.createElement('cardText');
    cardText.classList.add('cardText');

      const cardTitle = document.createElement('h4');
      cardTitle.classList.add('title');
      const textBirth = document.createElement('p');
      textBirth.classList.add('textObj');
      const textSpecies = document.createElement('p');
      textSpecies.classList.add('textObj');
      const textHouse = document.createElement('p');
      textHouse.classList.add('textObj');

    //insertar la información a los elementos
    cardTitle.innerHTML = name;
    
    //IF para remplazar el texto null de la data
    if(birth === null) {
        textBirth.innerHTML = 'Nacimiento: Desconocido';
    }else{
        textBirth.innerHTML = 'Nacimiento: '+ birth;
    }

    if(house === null) {
        textHouse.innerHTML = 'Casa: Desconocido';
    }else{
        textHouse.innerHTML = 'Casa: '+house;
    }

    if(species === null) {
        textSpecies.innerHTML = 'Tipo: Desconocido'
    }else {
        textSpecies.innerHTML = 'Tipo: '+species;
    }


    //ponemos los elementos agrupados de colores y texto
        //IF para personalizar los colores de acuerdo a las casas o especie
    if(house === 'Gryffindor') {
        cardColors.appendChild(cardGryffindor);
    }else if(house === 'Slytherin') {
        cardColors.appendChild(cardSlytherin);
    }else if(house === 'Ravenclaw') {
        cardColors.appendChild(cardRavenclaw);
    }else if(house === 'Hufflepuff') {
        cardColors.appendChild(cardHufflepuff);
    }else if(species === 'Human') {
        cardColors.appendChild(cardHuman);
    }else if(species !== 'Human' ) {
        cardColors.appendChild(cardSpecies);
    }
    
    cardColors.appendChild(colorWhite);

    cardText.appendChild(cardTitle);
    cardText.appendChild(textBirth);
    cardText.appendChild(textSpecies);
    cardText.appendChild(textHouse);
    
    //poner los elementos dentro del div padre
    fatherCards.appendChild(cardColors);
    fatherCards.appendChild(imgWand);
    fatherCards.appendChild(cardText);

    //Insertamos ya todo dentro del HTML SECTION
    section.appendChild(fatherCards);
}




//LIMPIAR EL SECTION
function cleanSection () {
    const section = document.querySelector('section');
    //retiramos todos los elementos contenidos
    while (section.firstChild) {
        section.removeChild(section.firstChild);
      }
} 
