let media = 7.2, resultado

if(media>=6){
    resultado = 'Aprovado'
}else{
    resultado = 'Reprovado'
}
console.log({media,resultado})

//Usando o operador ternário para chegar ao mesmo resultado
resultado = media >= 6 ? 'Aprovado' : 'Reprovado'
console.log('Usando operador ternário: ',{media,resultado})

let user = 'admin', msg

//Quando há apenas uma linha depois de um if, um else, um while, etc., podemos omitir as chaves
if(user === 'admin') msg = 'Bem-vindo'
else msg = 'Sem permissão'
console.log({user,msg})

//Usando o operador ternário
msg = user === 'admin' ? 'Bem-vindo' : 'Sem permissão'
console.log('Usando operador ternário: ',{user,msg})