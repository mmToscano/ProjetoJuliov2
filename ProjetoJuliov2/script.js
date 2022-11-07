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


//O código abaixo trata-se da manipulação do gráfico do Chart.js


var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: [
                'rgba(255, 0, 0, 0.5)',
                'rgba(255,165,0, 0.5)',
                'rgba(255,255,0, 0.5)',
                'rgba(0,255,0, 0.5)',
                'rgba(0,0,255, 0.5)',
                'rgba(221,160,221, 0.5)',
                'rgba(255, 192, 203, 0.5)'
            ],
            borderColor: 'black',
            borderWidth: 1,
            data: []
        }]
    },

    options: {}
});

function gerarValores(){
    for(count = 0; count < myChart.data.labels.length; count++){
        myChart.data.datasets[0].data[count] = Math.random(50);
    }
    myChart.update();
}

gerarValores();

function mudarGrafico(e){

    auxData = myChart.data;
    
    switch(e.target.id){
        case "linha":
            myChart.destroy();
            myChart = new Chart(ctx, {
                type: 'line',
                data: auxData
            });
            gerarValores();
        break;
        case "pizza":
            myChart.destroy();
            myChart = new Chart (ctx, {
                type: 'pie',
                data: auxData
            });
            gerarValores();
        break;
        case "barra":
            myChart.destroy();
            myChart = new Chart (ctx, {
                type: 'bar',
                data: auxData
            });
            gerarValores();
        break;
        case "polar":
            myChart.destroy();
            myChart = new Chart (ctx, {
                type: 'polarArea',
                data: auxData
            });
            gerarValores();
        break;

    }
}
