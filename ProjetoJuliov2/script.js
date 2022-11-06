let nomeDoObjeto = document.querySelectorAll(".inputDosAgrupamentos")[1];
let anoDoObjeto = document.querySelectorAll(".inputDosAgrupamentos")[3];

let serie1 = document.querySelectorAll(".uls")[0];
let serie2 = document.querySelectorAll(".uls")[1];
let serie3 = document.querySelectorAll(".uls")[2];

function adicionar(){

    switch(anoDoObjeto.value){
        case "1":
            var objeto = document.createElement('li');
            objeto.innerHTML = nomeDoObjeto.value + " Série: " + anoDoObjeto.value;
            serie1.appendChild(objeto);
            break;
        case "2":
            var objeto = document.createElement('li');
            objeto.innerHTML = nomeDoObjeto.value + " Série: " + anoDoObjeto.value;
            serie2.appendChild(objeto);
            break;
        case "3":
            var objeto = document.createElement('li');
            objeto.innerHTML = nomeDoObjeto.value + " Série: " + anoDoObjeto.value;
            serie3.appendChild(objeto);
            break;
        default:
            var objeto = document.createElement('li');
            objeto.innerHTML = nomeDoObjeto.value + " Série: " + anoDoObjeto.value;
            serie1.appendChild(objeto);
            break;
    }
}



//Código que cuida da parte da ordenação da lista
let inputs = document.querySelectorAll('.inputs');
let barras = document.querySelectorAll('.barrasVerdes');
let numerosAbaixoDasBarras = document.querySelectorAll('.numerosAbaixoDasBarras');

function gerarValores(){
    for(count = 0; count < inputs.length; count++){
        inputs[count].value = Math.floor((Math.random() * 250) + 30);
    }
}

function jogarNasBarras(){
    clearInterval(timeout);
    for(count = 0; count < barras.length; count++){
        barras[count].style.height = inputs[count].value + "px";
    }

    jogarNumerosAbaixoDasBarras();
}

function jogarNumerosAbaixoDasBarras(){
    for(count = 0; count < numerosAbaixoDasBarras.length; count++){
        numerosAbaixoDasBarras[count].innerHTML = inputs[count].value;
    }
}




let timeout;
let contadorDeVezes = 0;

function organizar(){
    contadorDeVezes++;
    for(count = 0; count < barras.length - 1; count++){

        if(parseInt(barras[count].style.height, 10) > parseInt(barras[count+1].style.height, 10)){ //O teste está funcionando
            atual = barras[count].style.height; 
            proximo = barras[count+1].style.height;

            valorDoNumeroAtual = numerosAbaixoDasBarras[count].innerHTML;
            valorDoProximoNumero = numerosAbaixoDasBarras[count+1].innerHTML;

            barras[count+1].style.height = atual;
            barras[count].style.height = proximo;

            numerosAbaixoDasBarras[count+1].innerHTML = valorDoNumeroAtual;
            numerosAbaixoDasBarras[count].innerHTML = valorDoProximoNumero;
        }
    }

    if(contadorDeVezes != barras.length){
        timeout = setTimeout(organizar, 500);
    }else{
        clearInterval(timeout);
    }


}