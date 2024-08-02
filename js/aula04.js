/* Arquivo JS aula 04 */

let produtos = ['Arroz','Feijão', 'Leite']
var codigos = Array(10, 20, 30)
var test = Array(10)
test[0] = "Oi"
test[9] = "Tudo bem?"
test[10] = "Opa!"
let meses = ['Jan', 'Fev', 'Mar', 'Abr']
meses[0] = 'Janeiro'

//   Adicionar no final push = empurre
 produtos.push('Açúcar', 'Trigo')
codigos.push(40, 50, 60, 70)
meses.push('Mai', 'Ago', '07')

// Remover do sinal pop = estourar
produtos.pop()
codigos.pop()
meses.pop()
meses.pop()

// Adicionar no inicio unshift
produtos.unshift('Uva', 'Maçã')

// Remover do inicio shift
produtos.shift()

// Remover de uma posicao especifica splice
// splice = emendar
// posicao inicial, quantos remover
//codigos.splice(1, 3)

// COPIAR array slice = fatiar porcao
// posicao inicial, quantos remover
// let meses1 = meses.slice()
// let meses2 - meses.slice(0,3)

// VER TAMANHO DO ARRAY lenght comprimento
// meses.lenght
// meses1.lenght
// meses2.lenght
