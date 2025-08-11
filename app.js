//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado')



function atualizarLista(){
    listaAmigos.innerHTML = "";
    for( i = 0; i < amigos.length;i++){
        let li = document.createElement('li');
        li.textContent =amigos[i];
        listaAmigos.appendChild(li)
    }
}

function adicionarAmigo(){
    //if (document.getElementById('amigo').value == ""){
    if (inputAmigo.value === ""){
        alert("Digite o nome de uma amigo antes de tentar adicionar.")
    }else{
        amigos.push(inputAmigo.value)
        atualizarLista();
        inputAmigo.value = "";  
    }
    return amigos;
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('Para sorteiar precisa haver nomes adicionados')
    }else{
        let numero = Math.floor(Math.random() * amigos.length);
        // Esconde a lista após o sorteio
        listaAmigos.style.display = 'none';
        resultado.innerHTML = `O amigo secreto sorteado é ${amigos[numero]}` 
    }
    

}