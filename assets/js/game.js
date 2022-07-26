let life = 6;
let wordRandom;
let randomTip;
let secretWord;
let secretTip;
let listDinamic = [];

 
let words = [ 
   word1 = {
    name : "Tesoura",
    tip  : "Objeto"
   },

   word2 = {
    name : "Garrafa",
    tip  : "Objeto"
   },

   word3 = {
    name : "Rádio",
    tip  : "Objeto"
   },

   word4 = {
    name : "Telefone",
    tip  : "Objeto"
   },

   word5 = {
    name : "Garrafa",
    tip  : "Objeto"
   },

   word6 = {
    name : "Quadro",
    tip  : "Objeto"
   },

   word7 = {
    name : "Teclado",
    tip  : "Objeto"
   },

   word8 = {
    name : "Mouse",
    tip  : "Objeto"
   },

// aqui pra baixo lugares

   word9 = {
    name : "Italia",
    tip  : "País"
   },

   word10 = {
    name : "Estados Unidos",
    tip  : "País"
   },

   word11 = {
    name : "Dinamarca",
    tip  : "País"
   },

   word12 = {
    name : "Grecia",
    tip  : "País"
   },

   word13 = {
    name : "Brasil",
    tip  : "País"
   },

   word14 = {
    name : "Russia",
    tip  : "País"
   }

];

function getLetterChoose(letter){
    
    if(life > 0){
        let letterChoose = document.querySelector('.tecla-'+letter);
        letterChoose.style.backgroundColor = '#C71585';
        letterChoose.style.color = '#fff';
    }
  
}



// trazendo uma palavra aleatoria
randomWord();
function randomWord(){
    const randomWord = Math.ceil(Math.random()* words.length -1); 
    secretWord = words[randomWord].name;
    secretTip = words[randomWord].tip; 
}

mountWord();
function mountWord(){ 
    let tipSecret = document.querySelector('.tip');
    tipSecret.innerHTML = secretTip;

    let wordSecret = document.querySelector('.secretWord');
    wordSecret.innerHTML = "";

    for(i=0; i<secretWord.length; i++){
        if(listDinamic[i] == undefined){
            listDinamic[i] = "&nbsp;";
            // console.log(secretWord);
            // aqui estou pegando a palavra secreta e colocando no html os espaços vazio
            wordSecret.innerHTML = wordSecret.innerHTML + "<div class='letter'>" +listDinamic[i]+ "</div>"; 
        }else{
            wordSecret.innerHTML = wordSecret.innerHTML + "<div class='letter'>" +listDinamic[i]+ "</div>"; 
        }
    }
} 

 