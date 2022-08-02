function executar(){
    const form = document.querySelector(".form");

    function recebeEventoForm(evento){
        evento.preventDefault();

        const inputPeso = form.querySelector(".peso");
        const inputAltura = form.querySelector(".altura");

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if(!peso || isNaN(peso)){
            setResultado(`peso inválido`, false);
            return;
        } 
        else if(!altura || isNaN(altura)){
            setResultado(`altura inválida`, false);
            return;
        } 
        
        const IMC = peso / (altura * altura);
        setResultado(`IMC de ${IMC.toFixed(2)}, ${verificaIMC(IMC)}`, true);
        return;

    }


    form.addEventListener('submit', recebeEventoForm);

}


function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = '';

    const p = criaP();
    
    if(isValid) p.classList.add('paragrafo-resultado');
    else p.classList.add('paragrafo-resultadoF');

    p.innerHTML = msg;
    resultado.appendChild(p);
}

function verificaIMC(IMC){
    if(IMC < 18.5){
        return `abaixo do peso`;
    } else if(IMC < 25){
        return `peso normal`;
    } else if(IMC < 30){
        return `sobrepeso`;
    } else if(IMC < 35){
        return `obesidade grau 1`;
    } else if(IMC < 40){
        return `obesidade grau 2`;
    } else{
        return `obesidade grau 3`;
    }
}

executar();