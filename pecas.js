// Variaveis, partes reservadas na memoria.
let pesoPeca = 150

// pesoPeca - Camel case
// peso_peca - Snake case
// PesoPeca - Pascal Case

if (pesoPeca > 100) {
    console.log("Peso maior que 100gr, logo podemos cadastrar a Pç!")
} else {
    console.log("Peso insufciente, não podemos cadastrar!")
}

let numeroPecas = 10

if (numeroPecas < 10) {
    console.log("Pode cadastrar mais caixas, ainda tem espaço na caixa!")
} else {
    console.log("Não tem espaço disponivel na caixa!!!")
}

let nomePeca = "Disco de Freio"

console.log("O comprimento do nome da peça é: ", nomePeca.length)

if (nomePeca.length < 3){
    console.log("Nome de peça muito curto, não é possivel cadastrar!")
} else {
    console.log("Nome de peça adequado, pode cadastrar!!!")
}

