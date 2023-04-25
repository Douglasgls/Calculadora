var telinha = document.querySelector('#telinha')
var menos = document.querySelector('#menos')

var operadores = ['*','/','-','+']

var numerosTelinha = []
var  maximoDeLinhas = [];



function apertado(event){
    if(maximoDeLinhas.length>= 10){
        return;
    }  
        var valor = event.srcElement.outerText;
        // diferenciar operadores / * - +
        for(var i=-1; i<operadores.length; i++){
            if(event.srcElement.outerText == operadores[i] ){
                telinha.textContent += operadores[i] 
                numerosTelinha.push(operadores[i])
            }}
            // pegar os numeros 
            if(operadores.indexOf(valor) === -1){
                if (telinha.textContent == 0){
                    telinha.textContent = ''
                    telinha.textContent += valor;
                }else{
                    telinha.textContent += valor };
                }
            maximoDeLinhas.push(valor)
               } 

if (telinha.textContent === '' || telinha.textContent === null || telinha.textContent === undefined) {
    telinha.textContent = '0';
}
                  

function limpar(){
        telinha.textContent = '0';
}

function resultado(){
    if(numerosTelinha.length != 0){
        // calcula tudo limitando as casas
        var calculo = eval(telinha.textContent);
        telinha.textContent = calculo.toFixed(1);}
}

document.addEventListener('keydown',function(eve){
    if(eve.key === 'Backspace' || eve.key === 'Delete'){
       telinha.textContent = telinha.textContent.slice(0,-1);
    }
    if (telinha.textContent === '' || telinha.textContent === null || telinha.textContent === undefined) {
        telinha.textContent = '0';
}})

