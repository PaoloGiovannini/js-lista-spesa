const listaOggettiSpesa = ["mele", "pere", "banane", "kiwi", "latte", "farina", "uova", "pasta", "carne"];

const listaDom = document.querySelector('.lista');

let i = 0;
while (i < listaOggettiSpesa.length){
    listaDom.innerHTML += `<li>${listaOggettiSpesa[i]}</li>`
    i++
}