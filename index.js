const clicouCalcular= (evento)=> {
    evento.preventDefault();

    let metros= document.getElementById('metros').value;

    let mensagem1;
    let mensagem2;
    let mensagem3;
    let mensagem4;

    let resultado1= metros * 100;
    let resultado2= metros / 1000;

    mensagem1= `--Equivalência--`;
    mensagem2= `${resultado1}cm`;
    mensagem3= `${metros}m`;
    mensagem4= `${resultado2}km`;

    const campoResultado1= document.getElementById('resultado1');
    campoResultado1.innerHTML= mensagem1;
    const campoResultado2= document.getElementById('resultado2');
    campoResultado2.innerHTML= mensagem2;
    const campoResultado3= document.getElementById('resultado3');
    campoResultado3.innerHTML= mensagem3;
    const campoResultado4= document.getElementById('resultado4');
    campoResultado4.innerHTML= mensagem4;
};

const iniciar= ()=> {
    document.getElementById('calcular').addEventListener('click', clicouCalcular);
};

document.addEventListener('DOMContentLoaded', iniciar);