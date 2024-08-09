

// //Declarando um array de obj-alunos
// let objAlunos = [
//     { id: 1, nome: "Vitors", rm: 25666 },
//     { id: 2, nome: "Marcos", rm: 85342 },
//     { id: 3, nome: "Jennifers", rm: 42564 },
//     { id: 4, nome: "Davids", rm: 10098 },
//     { id: 5, nome: "Lucas", rm: 16020 },
// ];


// //Gerando um array de nomes de alunos
// const nomesAlunos = objAlunos.map((aluno, indice, array) => ((indice + 1) + " - " + aluno.nome));
// console.log(nomesAlunos);

// const nomesAlunosVerificados = objAlunos.filter(a => {
//     if (a.nome[1] === "A" || a.nome[1] === "a") {
//         return a.nome;
//     }
// });
// console.log(nomesAlunosVerificados);

// const nomesAlunosVerificados = objAlunos.find(a => {
//     if (a.nome[1] === "A" || a.nome[1] === "a") {
//         return a.nome;
//     }
// });
// console.log(nomesAlunosVerificados);

// const nomesAlunosVerificados = objAlunos.every(a => a.nome.includes("s"));
// console.log(nomesAlunosVerificados);

// const nomesAlunosVerificados = objAlunos.some(a => a.nome.includes("z"));
// console.log(nomesAlunosVerificados);

//Declarando um array de obj-alunos
let objAlunos = [
    { id: 1, nome: "Vitors", rm: 25666 },
    { id: 2, nome: "Marcos", rm: 85342 },
    { id: 3, nome: "Jennifers", rm: 42564 },
    { id: 4, nome: "Davids", rm: 10098 },
    { id: 5, nome: "Lucas", rm: 16020 },
];

let objNotas = [
    { id: 1, nota: 7.5 },
    { id: 2, nota: 5.5 },
    { id: 3, nota: 4.3 },
    { id: 4, nota: 9.5 },
    { id: 5, nota: 3.5 },
];

//Gerar um novo objeto a partir dos alunos e notas com MAP:
const alunosComNotas = objAlunos.map(a => {
    //Retornando um obj nota de acordo com o ID do aluno
    const nota = objNotas.find(n => n.id === a.id);
    //Montando o novo objeto aluno com notas para retorno no array.
    // return { id: a.id, nome: a.nome, rm: a.rm, nota: nota.nota }
    return { ...a, nota: nota.nota }
});

console.log(alunosComNotas);

//Utilizando o reduce para consolidar o total das notas dos alunos:
const somaDasNotas = alunosComNotas.reduce((acumulado, aluno) => {
    return (acumulado + aluno.nota);
}, 0);

//Imprimindo o resultado
console.log(somaDasNotas);