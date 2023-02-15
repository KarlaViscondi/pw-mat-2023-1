let nome = 'Duda'
let idade = 19
let cidade = 'Franca/SP'
console.log('Nome: ' + nome + ', idade: ' + idade + ', mora em ' + cidade + '.')

//Mesma mensagem usando string template
//String templates são string especiais delimitadas pelos caracteres ``, 
//que permitem a interpolação direta de variáveis no meio delas
console.log(`Nome: ${nome}, idade: ${idade}, mora em ${cidade}.`)

//Dentro de uma string template, não estamos limitados a colocar apenas variáveis entre ${}.
//podemos colocar qualquer código em JS válido ali.
console.log(`Daqui a 5 anos, ${nome.toUpperCase()} terá ${idade + 5} anos.`)