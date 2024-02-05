let titulo = document.getElementById("titulo");
let ul = document.getElementsByTagName("ul");
let a = document.getElementsByTagName("a")[0];
let ol = document.getElementById("lista-ordenada");


console.log(titulo);
console.log(ul);
console.log(a);
console.log(ol);

document.getElementById("titulo").innerText = ("Meu Título Novo");
document.getElementsByTagName("a")[0].innerText = ("Proz Educação");
document.getElementsByTagName("ul")[0].innerHTML = `
<li>Item 4</li>
<li>Item 5</li>
<li>Item 6</li>
`;
document.getElementById("lista-ordenada").innerHTML =`
<li><a href="https://www.wikiaves.com.br/wiki/aves">Aves do Brasil</a></li>
<li><a href="https://www.wikiaves.com.br/wiki/phoenicopteriformes">Ordem dos Flamingos</a></li>
<li><a href="https://www.wikiaves.com.br/wiki/nyctibiiformes">Ordem dos Urutaus</a></li>
`
