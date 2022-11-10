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

function gerarValoresNaLista(){
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
        labels: [" ", " ", " ", " ", " ", " ", " " ],
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
    for(countDoDataset = 0; countDoDataset < myChart.data.datasets.length; countDoDataset ++){
        for(count = 0; count < myChart.data.labels.length; count++){
            myChart.data.datasets[countDoDataset].data[count] = Math.random(50);
        }
    }
    
    myChart.update();
}

function gerarValor(){
    let posicao = myChart.data.datasets[0].data.length;
    myChart.data.labels[posicao] = " ";
    myChart.data.datasets[0].data[posicao] = Math.random(50);
    myChart.update();
}

function apagarValor(){
    myChart.data.datasets[0].data.pop();
    myChart.update();
}

let auxDataset = {
    label: 'dataset',
    backgroundColor: 'rgba(255, 255, 0, 0.5)',
    borderColor: 'black',
    borderWidth: 1,
    data: []
}

function adicionarConjunto(){

    //Para dar certo, não é possível usar o auxData set. É preciso criar um dataSet inteiramente novo toda vez que rodar o método.
    let aux = {
        label: 'dataset',
        backgroundColor: 'rgba(255, 255, 0, 0.5)',
        borderColor: 'black',
        borderWidth: 1,
        data: []
    }

    for(count = 0; count < 7; count++){
        aux.data[count] = Math.random(50);
    }

    myChart.data.datasets.push(aux);
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


//Código que cuida da parte de plotar as funções no gráfico


const ctx2 = document.getElementById('myScatterChart').getContext('2d');

const myScatterChart = new Chart(ctx2, {
    type: 'scatter',

    data: {
        datasets: [{
            label: 'Diferentes gráficos',
            data: [],
            backgroundColor: 'white',
            borderColor: 'rgb(64, 31, 211)',
            borderWidth: 1,
            pointRadius: 0.1,
            pointHoverRadius: 7,
            showLine: true

        }]
    },

    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                beginAtZero: true
            }
        }
    }
});




function formula(valorDoY, quantidade){

    
    myScatterChart.data.datasets[0].data = null;
    myScatterChart.update();


    object = {x: null, y: null};

    for(count = 0; count < quantidade; count++){
        myScatterChart.data.datasets[0].data[count] = object;
    }

    valorDoX = -1 * ((quantidade -1)/2);
    for(count = 0; count < quantidade; count ++, valorDoX+= 1){
        myScatterChart.data.datasets[0].data[count] = {x: valorDoX, y: eval(valorDoY)};
    }
    
    myScatterChart.update();
    
}

function rodarFormula(e){

    switch(e.target.id){
        case "primeira":
            valorDoY = "valorDoX * valorDoX"
            formula(valorDoY, 81);
        break;

        case "segunda":
            valorDoY = "valorDoX * valorDoX * valorDoX";
            formula(valorDoY, 81);
        break;

        case "terceira":
            valorDoY = "Math.sin(valorDoX)";
            formula(valorDoY, 81);
        break;

        case "quarta":
            valorDoY = "(Math.exp((valorDoX * valorDoX) * -1)) * Math.sin(Math.PI * Math.pow(valorDoX, 3))";
            formula(valorDoY, 21);
        break;
    }
}