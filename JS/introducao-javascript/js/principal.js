//ARQUIVO DE JAVA SCRIPT

document.querySelector(".titulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//IMC DOS PACIENTES
var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length; i++){

    paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc")

    var AlturaEhValida = true;
    var PesoEhValido = true;

    if(peso<=0 || peso>=1000){
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido!";
        PesoEhValido = false;
        //add classe para grifar campos invalidos, a cor foi setada no css
        paciente.classList.add("paciente-invalido");
    }

    if(altura<=0 || altura>=3.00){
        console.log("Altura inválida!");
        tdImc.textContent = "Altura inválida!";
        AlturaEhValida = false;
        //add classe para grifar campos invalidos, a cor foi setada no css
        paciente.classList.add("paciente-invalido");
    }   

    if(AlturaEhValida && PesoEhValido){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var BotaoAdicionar = document.querySelector("#adicionar-paciente");

BotaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
   
    var form = document.querySelector("#form-paciente");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd = nome.textContent;
    pesoTd = peso.textContent;
    alturaTd = altura.textContent;
    gorduraTd = gordura.textContent;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gordura);

    var tabela = document.querySelector("#tabela-pacientes");

    talela.appendChild(pacienteTr);
});
