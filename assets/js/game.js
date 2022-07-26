let life = 6;
let wordRandom;
let randomTip;
let secretWord;
let secretTip;
let listDinamic = [];

 
let words = [ 
   word1 = {
    name : "GARRAFA",
    tip  : "Objeto"
   },

   word2 = {
    name : "GARRAFA",
    tip  : "Objeto"
   },

   word3 = {
    name : "GARRAFA",
    tip  : "Objeto"
   },

   word4 = {
    name : "TELEFONE",
    tip  : "Objeto"
   },

   word5 = {
    name : "MONITOR",
    tip  : "Objeto"
   },

   word6 = {
    name : "GARRAFA",
    tip  : "Objeto"
   },

   word7 = {
    name : "GARRAFA",
    tip  : "Objeto"
   },

   word8 = {
    name : "GARRAFA",
    tip  : "Objeto"
   },

// aqui pra baixo lugares

   word9 = {
    name : "ITALIA",
    tip  : "País"
   },

   word10 = {
    name : "GARRAFA",
    tip  : "País"
   },

   word11 = {
    name : "DINAMARCA",
    tip  : "País"
   },

   word12 = {
    name : "GRECIA",
    tip  : "País"
   },

   word13 = {
    name : "BRASIL",
    tip  : "País"
   },

   word14 = {
    name : "RUSSIA",
    tip  : "País"
   }

];
 
//essa função é do onclic
function getLetterChoose(letter){ 


    if(letter == 'restart'){
        // alert("Você clicou em restart do jogo");
        window.location.href = 'index.html'; 
    }
    
    document.querySelector('.tecla-'+letter).disabled = true;
    // aqui se ela tiver vida, eu pego a tecla e mudo ela de cor
    if(life > 0){
        let letterChoose = document.querySelector('.tecla-'+letter);
        letterChoose.style.backgroundColor = '#C71585';
        letterChoose.style.color = '#fff'; 

        // bloquear a tecla para o usuário não conseguir mais clicar nela
        letterChoose.style.cursor = 'not-allowed';
        // letterChoose.style.display = 'none';
        // letterChoose.style = disabled;
          
        // função para verificar se a letra existe na palavra
         thisLetterExist(letter);  
        //  função que monta as palavra na tela
         mountWord();
    }else{
        // alert("Você perdeu o jogo aaaa");
        // // life = 6; 
        // loadImage(life);
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
    tipSecret.innerHTML = "Dica: "+ secretTip;

    let wordSecret = document.querySelector('.secretWord');
    wordSecret.innerHTML = "";

    for(i=0; i<secretWord.length; i++){
        if(listDinamic[i] == undefined){
            listDinamic[i] = "&nbsp;";
            // console.log("Lista dentro do mount "+listDinamic);
            // console.log(secretWord);
            // aqui estou pegando a palavra secreta e colocando no html os espaços vazio
            wordSecret.innerHTML = wordSecret.innerHTML + "<div class='letter'>" +listDinamic[i]+ "</div>"; 
        }else{
            wordSecret.innerHTML = wordSecret.innerHTML + "<div class='letter'>" +listDinamic[i]+ "</div>"; 
        }
    }
} 

//  thisLetterExist('a');
function thisLetterExist(letter){ 
    let positionLetterInWord = secretWord.indexOf(letter);


    if(positionLetterInWord < 0){
        // significa que não existe a letra
        life --; 
        // aqui quando chegar em zero vidas, eu falo pro jogador que ele perdeu o jogo
        if(life == 0){
            callModal('Sorry, you lost', "Try Again, the Word was "+secretWord)
           
        }
        // função para verificar as vidas e colocar o desenho da forca correto
        loadImage(life); 
    }else{ 
        for(i=0; i < secretWord.length; i++){
             if(secretWord[i] == letter){
                listDinamic[i] = letter; 
             }   
        }  
    }

     
     let victory = true;
     // verificar se a palavra é igual 
     for(i=0; i<secretWord.length; i++){
         if(secretWord[i] != listDinamic[i]){
             victory = false; 
            //  console.log("Você Venceu");
         } 
     }

     if(victory == true){
        life = 0;
        callModal('Congratulation', 'You Won');
     }
}

// loadImage();
function loadImage(life){
    switch(life){
        case 6:
            // console.log('Estou no case 6');
            // // aqui estou reiniciando a forca vazia
            // document.querySelector('.forca').classList.remove('forca6'); 
            
            // aqui vou chamar a função de montar palavra noavamente
            // randomWord();

            break;
        case 5:
            document.querySelector('.forca').classList.remove('forca0');
            document.querySelector('.forca').classList.add('forca1') ;
            break;

        case 4:
            document.querySelector('.forca').classList.remove('forca1');
            document.querySelector('.forca').classList.add('forca2') ;
            break;

        case 3:
            document.querySelector('.forca').classList.remove('forca2');
            document.querySelector('.forca').classList.add('forca3') ;
            break;

         case 2:
            document.querySelector('.forca').classList.remove('forca3');
            document.querySelector('.forca').classList.add('forca4') ;
            break;

        case 1:
            document.querySelector('.forca').classList.remove('forca4');
            document.querySelector('.forca').classList.add('forca5') ;
            break;
        
        case 0:
            document.querySelector('.forca').classList.remove('forca5');
            document.querySelector('.forca').classList.add('forca6');
            break;

        default:
            document.querySelector('.forca').classList.remove('forca');
        
    }
}

function callModal(title, msg){
    document.querySelector('#exampleModalLabel').innerHTML = title;
    document.querySelector('#modalBody').innerHTML = msg;
    $('#exampleModal').modal('show');

    // setInterval(function(){
    //     window.location.href = '../index.html';
    // },2000);

    // window.location.href = '../index.html';

}
 