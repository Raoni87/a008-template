// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')
let resultado;

resultado = minhaIdade > idadeAmiga;
console.log ("Sua idade é maior do que a da sua melhor amiga?", resultado);

resultado = minhaIdade - idadeAmiga;
console.log("Diferença de idade:", resultado);

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

!b && d;
b && a && !d;
a || d;
c && !d;



