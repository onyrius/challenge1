let rgb1 = document.querySelector('#rgb-color1');
let rgb2 = document.querySelector('#rgb-color2');
let rgb3 = document.querySelector('#rgb-color3');
let rgb4 = document.querySelector('#rgb-color4');
let rgb5 = document.querySelector('#rgb-color5');
let rgb6 = document.querySelector('#rgb-color6');
// const containerColors = document.querySelector('#container-colors')

//-----criando cores dinâmicas -------
function radomColor () {
    let radomColorR = Math.random()*255;
    let radomColorG = Math.random()*255;
    let radomColorB = Math.random()*255;
    let cor = 'rgb( '+radomColorR+' , '+radomColorG+' , '+radomColorB+')'
    return cor
}


rgb1.style.backgroundColor = radomColor();
rgb2.style.backgroundColor = radomColor();
rgb3.style.backgroundColor = radomColor();
rgb4.style.backgroundColor = radomColor();
rgb5.style.backgroundColor = radomColor();
rgb6.style.backgroundColor = radomColor();

//------- atriduindo text rgb no paragrafo--

let allColors = [rgb1, rgb2, rgb3, rgb4, rgb5, rgb6];

let corAleatóriaParagrafo = Math.floor(Math.random()*allColors.length);

let capturandoCorRgb = window.getComputedStyle(allColors[corAleatóriaParagrafo]).backgroundColor;
let corParaAdvinhar = capturandoCorRgb.split('rgb')[1];
let rgbColor = document.querySelector('#rgb-color');

rgbColor.innerHTML = corParaAdvinhar;

//------------ clicar e retornar resposta ---

let answer = document.querySelector('#answer');
let allBall = document.querySelectorAll('.ball')
for (let index = 0; index < allBall.length; index +=1) {
    allBall[index].addEventListener('click', escolher)
}

function escolher (event) {
    console.log( event.target.style.backgroundColor)
    if (event.target.style.backgroundColor === 'rgb' + corParaAdvinhar) {
        answer.innerHTML = 'Acertou!'
        } else {
        answer.innerHTML = 'Errou! Tente novamente!'   
    }
    
}

/**Source https://www.youtube.com/watch?v=tUJvE4xfTgo&ab_channel=VictorRibeiro */

//-------- botão reiniciar -------
let reiniciarButton = document.querySelector('#reset-game')
reiniciarButton.addEventListener('click', reloadPage);
 function reloadPage() {
    document.location.reload(true)
 }
 //**https://developer.mozilla.org/pt-BR/docs/Web/API/Location/reload */