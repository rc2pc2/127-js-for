// // ! i++ => i += 1 => i = i + 1 

// const ulElement = document.querySelector('ul');

// for ( let indice = 1; indice <= 25 ; indice = indice + 1){
            
//     // > Creare un elemento HTML
//     const liElement = document.createElement('li');
//     liElement.classList.add('list-item');
//     liElement.append(indice);
    
//     // < Aggiungo elemento ad un elemento esistente nel DOM
//     ulElement.appendChild(liElement);
// }


// for (let i = 1000; i >= 0 ; i--){
//     console.log(i);
// }

const outputElement = document.querySelector('div#output');


let triangleString = '';
const charToUse = '%';
for( let i = 0 ; i < 10 ; i++ ){
    triangleString += charToUse;
    outputElement.innerHTML += triangleString + '<br>';
}

for( let k = triangleString.length - 1 ; k >= 0 ; k-- ){
    triangleString = triangleString.slice(0, triangleString.length - 1);
    outputElement.innerHTML += triangleString + '<br>';
}

// ? Scacchiera su console

// > Creo un ciclo che vada da 1 a 8 che stara' per le righe da mostrare
//  < dentro al ciclo controllo che l'indice sia un numero pari o dispari
    //  % se e' pari faccio x
    // # se e' dispari faccio y

const rowLength = 12;
let oddCell = '';
let evenCell = '';
let rigaConsole = '';

// > scrivi 8 righe a partire da 1
for (let index = 1; index <= 8; index++) {
    rigaConsole += '|';

    // > se e' una riga pari
    if(index % 2 == 0){
        oddCell = ' ';
        evenCell = '#';
    } else {
        oddCell = '#';
        evenCell = ' '; 
    }

    // < per ogni colonna (quindi ogni cella della scacchiera)
    for (let l = 1; l <= rowLength ; l++){
        if ( l % 2 === 0){
            // % e' pari
            rigaConsole += evenCell;
        } else {
            // # e' dispari
            rigaConsole += oddCell;
        }
    }
    rigaConsole += '|\n';
}
console.log(rigaConsole);

// Credits: Giordano Fabrizi 
// for (let i = 0; i < 8; i++) {
//     let riga = '|';
//     for (let j = 0; j < 16; j++) {
//         if ((i+j) % 2 == 0) {
//             riga += '#';
//         } else {
//             riga +=' ';
//         }
//     }
//     riga += '|';
//     console.log(riga);
// }