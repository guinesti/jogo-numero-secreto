let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do Desafio');

function verificarClique() {
    console.log('O botão foi clicado!');
}

function verificarAlerta() {
    alert('Eu amo JS');
}


function verficarPrompt() {
    let cidade = prompt('Qual a sua cidade?');
    alert(`Estive em ${cidade} e lembrei de você`);
}
