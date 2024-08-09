/*
    É necessário passar uma função de callback como argumento para usar o map
    array.map(function(3 parametros){

    })
*/

// Declarando um array de alunos
// let objAlunos = [
//     {id:1, nome:"Vitors", rm:25666},
//     {id:2, nome:"Marcos", rm:85342},
//     {id:3, nome:"Jennifers", rm:42564},
//     {id:4, nome:"Davids", rm:10098},
//     {id:5, nome:"Lucas", rm:16020},
// ];

// Gerando um array de nomes de alunos
// Usar arrow function para usar o this e por questão de estética do código
//map((item do array, indice do array, próprio array))
// const nomesAlunos = objAlunos.map((aluno,indice, array) => ((indice + 1) + " - " + aluno.nome));

// console.log(nomesAlunos);

// Filter - retorna um array baseado numa condicional
// Retorna um registro inteiro num array baseado num condicional
// const nomesAlunosVerificados = objAlunos.filter( a => {
//     if(a.nome[1] === "A" || a.nome[1] === "a") {
//         return a.nome
//     }
// });
// console.log(nomesAlunosVerificados);

// Find - Encontra o primeiro registro com a condicional, o restante não importa
// const nomesAlunosVerificados = objAlunos.find( a => {
//     if(a.nome[1] === "A" || a.nome[1] === "a") {
//         return a.nome;
//     }
// });
// console.log(nomesAlunosVerificados);

// Every - Percorre todos os resultados da lista e retorna cada item da lista cujo nome contenha "s"
// const nomesAlunosVerificados = objAlunos.every( a => a.nome.includes("s"));
// console.log(nomesAlunosVerificados);

// Some - Retorna true se pelo menos um dos objetos atende ao condicional
// const nomesAlunosVerificados = objAlunos.some( a => a.nome.includes("i"));
// console.log(nomesAlunosVerificados);

let objAlunos = [
    {id:1, nome:"Vitors", rm:25666},
    {id:2, nome:"Marcos", rm:85342},
    {id:3, nome:"Jennifers", rm:42564},
    {id:4, nome:"Davids", rm:10098},
    {id:5, nome:"Lucas", rm:16020},
];

let objNotas = [
    {id:1, nota:7.5, rm:25666},
    {id:2, nota:5.5, rm:85342},
    {id:3, nota:4.3, rm:42564},
    {id:4, nota:9.5, rm:10098},
    {id:5, nota:3.5, rm:16020},
]

// Gerar um novo objeto a partir dos alunos e notas com MAP:
const alunosComNotas = objAlunos.map(a => {
    //Retornando um obj nota de acordo com o ID do aluno
    const nota = objNotas.find(n => n.id === a.id);

    
    // Montando o novo objeto aluno com notas para retorno do array
    // return {id:a.id, nome: a.nome, rm: a.rm, nota: nota.nota};

    // return usando spread
    return {...a, nota: nota.nota};
});

console.log(alunosComNotas);

//Utilizando o reduce  para consolidar o total das notas dos alunos:
//const somaDasNotas = alunosComNotas.reduce( (acumulado, valorAtual) => {
// valorAtual = item da lista da iteração
const somaDasNotas = alunosComNotas.reduce( (acumulado, aluno) => {
    return (acumulado + aluno.nota)
}, 0)

//Imprimindo o resultado
console.log(somaDasNotas);