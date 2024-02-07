//Criando o título
let tituloSite = document.createElement("h1");
tituloSite.innerText = "Promoção";
tituloSite.id = "titulo";

// Adicionando o título
let corpodosite = document.querySelector("body");
corpodosite.appendChild(tituloSite);

// Criando o produto
const produtoNovo = document.createElement("div");
produtoNovo.innerHTML =`
<h2 class="nome-produto">Contrabaixo 4 Cordas TRBX174 Preto YAMAHA</h2>
<p class="texto-produto">O TRBX174 é o modelo de entrada da linha TRBX, mantendo a qualidade e sonoridade características da Yamaha. Possui um acabamento impecável e timbres encorpados, é o baixo ideal para iniciantes exigentes, que desejam crescer musicalmente! O TRBX possui corpo sólido, braço que combina conforto e velocidade devido a construção laminada de 5 peças de Maple e Mahogany, possui junção parafusada extremamente precisa entre braço e corpo o que facilita os ajustes.
</p>
<h3 class="valor-produto">Valor: R$1.689 - Em até 10x de R$ 168,95 sem juros!</h3>
<img src="https://m.media-amazon.com/images/I/41TGG5-fUHS._AC_SL1000_.jpg" alt="Contrabaixo" height="300"></img>
`

// Adicionando o produto
corpodosite.appendChild(produtoNovo);


