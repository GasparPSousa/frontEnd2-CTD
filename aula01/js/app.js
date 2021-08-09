
// 1º Solução

//Criando um array de notas
notas = [5, 6, 9, 10]

// Imprimindo a soma das notas no Console
function imprimirSomaDasNotas(notas) {
    var soma = 0;
    notas.forEach(nota => {
        soma = soma + nota;
        console.log(soma);
    });
};

// Invocando a função imprimirSomaDasNotas()
imprimirSomaDasNotas(notas)

// Calculando a soma das notas
let somaTotal = notas.reduce((acc, nota) => acc + nota)

// Calculando a media 
media = somaTotal / 4;
console.log(`\n${media}`);

// Imprimindo a nota do aluno por Bimestre
for(i = 0; i < notas.length; i++) {
    console.log(`Nota do ${i + 1} Bimestre: ${notas[i]}`);
}

// Imprimindo sua Nota Final(média)
console.log(`\nMédia Final: ${media}`);

// 
function verificarAprovacao(media) {

    if(media >= 7) {
        console.log(`Parabéns pela média ${media}. Você foi aprovado!!`);
    } else {
        console.log(`Infelizmente sua média ${media} foi baixa, mas não desanime. Tente novamente!`);
    }
}

// Invocando a função verificarAprovacao()
verificarAprovacao(media)












/* 
// 2º Solução - Usando interação com o usuário

nota1 = prompt("Digite a nota 1")
nota2 = prompt("Digite a nota 2")
soma1 = parseInt(nota1) + parseInt(nota2)
// console.log(parseInt(nota1) + parseInt(nota2));
alert(soma1);
console.log(soma1);
nota3 = prompt("Digite a nota 3")
soma2 = soma1 + parseInt(nota3)
alert(soma2)
console.log(soma2);
nota4 = prompt("Digite a nota 4")
soma3 = soma2 + parseInt(nota4)
alert("A soma total é: " + soma3)
console.log("A soma total é: " + soma3);
media = soma3 / 4;
alert("A média é: " + media)
console.log("A média é: " + media); 

if(media >= 7) {
    alert(`Parabéns pela média ${media}. Você foi aprovado!!`);
} else {
    alert(`Infelizmente sua média ${media} foi baixa, mas não desanime. Tente novamente!`);
}


 */



