let elementoJavascript = document.createElement("li"); //criando uma nova li

elementoJavascript.innerText = "Javascript"; // adicionando conteúdo à li
elementoJavascript.id = "ling-js"; // adicionando um id à li

console.log(elementoJavascript); // imprimindo o resultado: item da lista, com id

let listaLinguagens = document.querySelector(".lista-linguagens"); // capturando a classe onde quero colocar minha li nova
listaLinguagens.appendChild(elementoJavascript); // adicionando a li criada à classe selecionada

const postagemJavascript = document.createElement("div");

postagemJavascript.innerHTML = `
<h2 class="post-titulo">JavaScript</h2>
<p class="post-texto">
JavaScript é uma linguagem de programação
</p>`

let postsdaPagina = document.querySelector(".postagens")
postsdaPagina.appendChild(postagemJavascript);