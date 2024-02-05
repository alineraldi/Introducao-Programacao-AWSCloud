// Operador Lógico && e ||
// Retorna true se os dois operandos forem true

// console.log(true && true);

let maiorIdade = false;
let CarteiraTrabalho = false;
let PodeAplicar = maiorIdade || CarteiraTrabalho;

console.log(PodeAplicar)

//Operador NOT

let candidatoRecusado = !PodeAplicar

console.log('Candidato Recusado', candidatoRecusado)