import data from "./data/harrypotter/data.js";
import functions from "./funciones.js";

const infoCharacters = data.characters;


getData(infoCharacters);

//sacamos la información especifica para crear las tarjetas
function getData(info) {
    info.map( (character) => {
        let {name, birth, species, house} = character;

        //Función que hace las tarjetas
        generateCard(name, birth, species, house);
    })
}




//EVENTO ORDENAR DATA A-Z
const btnOrder = document.querySelector('.alphabetic');
btnOrder.addEventListener('click', function (){

    cleanSection();

    //IMPRIMIENDO LA INFORMACIÓN EN EL DOM
    functions.sortOrder(infoCharacters).map( (character) => {
         //hacemos destructuring para la información
         let {name, birth, species, house} = character;
        
         //Función que hace las tarjetas
         generateCard(name, birth, species, house);
    });

})




//EVENTO ORDENAR DATA Z-A
const btnOrderReverse = document.querySelector('.alphabeticReverse');
btnOrderReverse.addEventListener('click', function (){

    cleanSection();

    //IMPRIMIENDO LA INFORMACIÓN EN EL DOM
    functions.sortOrderReverse(infoCharacters).map( (character) => {
        //hacemos destructuring para la información
        let {name, birth, species, house} = character;
       
        //Función que hace las tarjetas
        generateCard(name, birth, species, house);
   });

})




//EVENTO FILTRAR DATA
document.querySelector('#valueFilter').addEventListener('keyup', function (event) {
    if(event.code === 'Enter'){
        cleanSection();
     let inputValueFilter = document.querySelector('#valueFilter').value;
     let matchInfoResult = functions.filterNames(infoCharacters,inputValueFilter)[0];
     let {name, birth, species, house} = matchInfoResult;
     generateCard(name, birth, species, house);
    }
    
})



//EVENTO REDUCE DATA (PRESENTAR PORCENTAJE DE PERSONAJES POR CASAS)
const btnHousesPorcent = document.querySelector('#houses');
btnHousesPorcent.addEventListener('click', function () {

    cleanSection();

    //sacamos solo la información de las casas por cada personaje
    const houses = infoCharacters.map( (character) => {
        return character.house;
    })

    //Sacamos un array que contiene cuantos personajes hay por cada casa
    const resultReduce = functions.reduceHouses(houses);

    //Calculamos el porcentaje de cada casa de acuerdo a los resultados anteriores
    const totalGryffindor = resultReduce['Gryffindor'] + resultReduce['Gryffindor (possibly)'] + resultReduce['Gryffindor (likely)'];
    const porcentGryffindor = ((100 * totalGryffindor) / 707).toFixed(2);

    const totalSlytherin = resultReduce['Slytherin'] + resultReduce['Slytherin (possibly)'] + resultReduce['Slytherin (likely)'] + resultReduce['Slytherin (most likely)'];
    const porcentSlytherin = ((100 * totalSlytherin) / 707).toFixed(2);

    const totalRavenclaw = resultReduce['Ravenclaw'] + resultReduce['Ravenclaw (possibly)'] + resultReduce['Ravenclaw (likely)'];
    const porcentRavenclaw = ((100 * totalRavenclaw) / 707).toFixed(2);
    
    const totalHufflepuff = resultReduce['Hufflepuff'] + resultReduce['Hufflepuff (possibly)'] + resultReduce['Hufflepuff (likely)'];
    const porcentHufflepuff = ((100 * totalHufflepuff) / 707).toFixed(2);

    //Creamos las tarjetas en el dom para imprimirlas
    //Elegimos el elemento donde van a ser insertadas
    const section = document.querySelector('section');

    //creamos los elementos contenedores del frente
    const articleDomHufflepuff = document.createElement('article');
        articleDomHufflepuff.classList.add('hufflepuff-article');
    const articleDomRavenclaw = document.createElement('article');
        articleDomRavenclaw.classList.add('ravenclaw-article');
    const articleDomGryffindor = document.createElement('article');
        articleDomGryffindor.classList.add('gryffindor-article');
    const articleDomSlytherin = document.createElement('article');
        articleDomSlytherin.classList.add('slytherin-article');

    //Img de cada tarjeta
    const imgDomHufflepuff = document.createElement('img');
        imgDomHufflepuff.classList.add('houses');
        imgDomHufflepuff.src = "./img/WOBBLY SHIKA (1).jpeg";
        imgDomHufflepuff.alt = 'hufflepuff.jpeg'
    const imgDomRavenclaw = document.createElement('img');
        imgDomRavenclaw.classList.add('houses');
        imgDomRavenclaw.src = "./img/ravenclaw-house.jpeg";
        imgDomRavenclaw.alt = 'ravenclaw.jpeg';
    const imgDomGryffindor = document.createElement('img');
        imgDomGryffindor.classList.add('houses');
        imgDomGryffindor.src = "./img/gryffindor-house.jpeg";
        imgDomGryffindor.alt = 'gryffindor.jpeg'
    const imgDomSlytherin = document.createElement('img');
        imgDomSlytherin.classList.add('houses');
        imgDomSlytherin.src = "./img/WOBBLY SHIKA.jpeg";
        imgDomSlytherin.alt = 'slytherin.jpeg'

    //Carta de color para el hover de cada una
    const articleColorHufflepuff = document.createElement('article');
        articleColorHufflepuff.classList.add('back-article-hufflepuff');
    const articleColorRavenclaw = document.createElement('article');
        articleColorRavenclaw.classList.add('back-article-ravenclaw');
    const articleColorGryffindor = document.createElement('article');
        articleColorGryffindor.classList.add('back-article-gryffindor');
    const articleColorSlytherin = document.createElement('article');
        articleColorSlytherin.classList.add('back-article-slytherin');

    //donde va a ir el texto de los resultados
    const textPorcentHufflepuff = document.createElement('h2');
        textPorcentHufflepuff.classList.add('textPorcent');
        textPorcentHufflepuff.innerText = porcentHufflepuff + '%';
    const textPorcentRavenclaw = document.createElement('h2');
        textPorcentRavenclaw.classList.add('textPorcent');
        textPorcentRavenclaw.innerText = porcentRavenclaw + '%';
    const textPorcentGryffindor = document.createElement('h2');
        textPorcentGryffindor.classList.add('textPorcent');
        textPorcentGryffindor.innerText = porcentGryffindor + '%';
    const textPorcentSlytherin = document.createElement('h2');
        textPorcentSlytherin.classList.add('textPorcent');
        textPorcentSlytherin.innerText = porcentSlytherin + '%';

    //Texto complementario para las tarjetas
    const textAdictHufflepuff = document.createElement('p');
        textAdictHufflepuff.classList.add('textAdict');
        textAdictHufflepuff.innerText = `${totalHufflepuff} of the 707 characters belong to Hufflepuff`;
    const textAdictRavenclaw = document.createElement('p');
        textAdictRavenclaw.classList.add('textAdict');
        textAdictRavenclaw.innerText = `${totalRavenclaw} of the 707 characters belong to Ravenclaw`;
    const textAdictGryffindor = document.createElement('p');
        textAdictGryffindor.classList.add('textAdict');
        textAdictGryffindor.innerText = `${totalGryffindor} of the 707 characters belong to Gryffindor`;
    const textAdictSlytherin = document.createElement('p');
        textAdictSlytherin.classList.add('textAdict');
        textAdictSlytherin.innerText = `${totalSlytherin} of the 707 characters belong to Slytherin`;

    //Integramos todo al DOM
    articleDomHufflepuff.appendChild(imgDomHufflepuff);
    articleDomRavenclaw.appendChild(imgDomRavenclaw);
    articleDomGryffindor.appendChild(imgDomGryffindor);
    articleDomSlytherin.appendChild(imgDomSlytherin);

    articleColorHufflepuff.appendChild(textPorcentHufflepuff);
        articleColorHufflepuff.appendChild(textAdictHufflepuff);
    articleColorRavenclaw.appendChild(textPorcentRavenclaw);
        articleColorRavenclaw.appendChild(textAdictRavenclaw);
    articleColorGryffindor.appendChild(textPorcentGryffindor);
        articleColorGryffindor.appendChild(textAdictGryffindor);
    articleColorSlytherin.appendChild(textPorcentSlytherin);
        articleColorSlytherin.appendChild(textAdictSlytherin);

    section.appendChild(articleDomHufflepuff);
    section.appendChild(articleDomRavenclaw);
    section.appendChild(articleDomGryffindor);
    section.appendChild(articleDomSlytherin);
    
    section.appendChild(articleColorHufflepuff);
    section.appendChild(articleColorRavenclaw);
    section.appendChild(articleColorGryffindor);
    section.appendChild(articleColorSlytherin);
} )




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
    
    //Imagenes de las casas
    const imgGryffindor = document.createElement('img');
      imgGryffindor.classList.add('cardImg');
      imgGryffindor.src = "./img/Gryffindor_escudo.png";
      imgGryffindor.alt = 'Gryffindor__escudo';
    const imgSlytherin = document.createElement('img');
      imgSlytherin.classList.add('cardImg');
      imgSlytherin.src = "./img/Slytherin__escudo.png";
      imgSlytherin.alt = 'Slytherin__escudo';
    const imgRavenclaw = document.createElement('img');
      imgRavenclaw.classList.add('cardImg');
      imgRavenclaw.src = "./img/Ravenclaw_escudo.png";
      imgRavenclaw.alt = 'Ravenclaw__escudo';
    const imgHufflepuff = document.createElement('img');
      imgHufflepuff.classList.add('cardImg');
      imgHufflepuff.src = "./img/Hufflepuff_escudo.png";
      imgHufflepuff.alt = 'Hufflepuff__escudo';
    const imgOthers = document.createElement('img');
      imgOthers.classList.add('cardImgOthers');
      imgOthers.src = "./img/book.png";
      imgOthers.alt = 'book_harry';
    const imgAnimals = document.createElement('img');
      imgAnimals.classList.add('cardImg');
      imgAnimals.src = "./img/animals_fantastic1.png";
      imgAnimals.alt = 'animals_fantastic';

    //Elementos con el texto
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
        textBirth.innerHTML = 'Birth: Unknown';
    }else{
        textBirth.innerHTML = 'Birth: '+ birth;
    }

    if(house === null) {
        textHouse.innerHTML = 'House: Unknown';
    }else{
        textHouse.innerHTML = 'House: '+house;
    }

    if(species === null) {
        textSpecies.innerHTML = 'Species: Unknown'
    }else {
        textSpecies.innerHTML = 'Species: '+species;
    }


    //ponemos los elementos agrupados de colores y texto
        //IF para personalizar los colores de acuerdo a las casas o especie
    if(house === 'Gryffindor' || house === 'Gryffindor (likely)' || house === 'Gryffindor (possibly)') {
        cardColors.appendChild(cardGryffindor);
        fatherCards.appendChild(imgGryffindor);
    }else if(house === 'Slytherin' || house === 'Slytherin (likely)' || house === 'Slytherin (possibly)') {
        cardColors.appendChild(cardSlytherin);
        fatherCards.appendChild(imgSlytherin);
    }else if(house === 'Ravenclaw' || house === 'Ravenclaw (likely)' || house === 'Ravenclaw (possibly)') {
        cardColors.appendChild(cardRavenclaw);
        fatherCards.appendChild(imgRavenclaw);
    }else if(house === 'Hufflepuff' || house === 'Hufflepuff (likely)' || house === 'Hufflepuff (possibly)') {
        cardColors.appendChild(cardHufflepuff);
        fatherCards.appendChild(imgHufflepuff);
    }else if(species === 'Human') {
        cardColors.appendChild(cardHuman);
        fatherCards.appendChild(imgOthers);
    }else if(species !== 'Human' ) {
        cardColors.appendChild(cardSpecies);
        fatherCards.appendChild(imgAnimals);
    }
    
    cardColors.appendChild(colorWhite);

    cardText.appendChild(cardTitle);
    cardText.appendChild(textBirth);
    cardText.appendChild(textSpecies);
    cardText.appendChild(textHouse);
    
    //poner los elementos dentro del div padre
    fatherCards.appendChild(cardColors);
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




//MOSTRAR PERSONAJES COMO AL INICIO

const selectionCharacters = document.querySelector('.charName');
selectionCharacters.addEventListener('click', () => {
    location.reload();
    //cleanSection();
    //getData(infoCharacters);
})







/*particlesJS("particles-js", {
    "particles":
    {"number":{
        "value":160,
        "density":{
            "enable":true,
            "value_area":800}}
            ,"color":
            {"value":"#ffffff"},
            "shape":
            {"type":"circle",
            "stroke":
            {"width":0,
            "color":"#000000"}
            ,"polygon":
            {"nb_sides":5},
            "image":{"src":"img/github.svg","width":100,"height":100}},
            "opacity":{"value":1,"random":true,"anim":
            {"enable":true,"speed":1,"opacity_min":0,"sync":false}},
            "size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});*/
