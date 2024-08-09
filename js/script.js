//Array(function(valor,indice,array){
//})

//notacao = (), {}, []

//Declarando um array de obj-alunos
// let objAlunos = [
//     {id:1,nome:"Felipe",rm:98985},
//     {id:2,nome:"Lucas",rm:98986},
//     {id:3,nome:"Matheus",rm:98987},
//     {id:4,nome:"Augusto",rm:98988},
//     {id:5,nome:"Diego",rm:98989},
// ];

//gerando um array de nome de alunos
// const nomeAlunos = objAlunos.map((aluno,indice, array) => ((indice + 1) + " - " + aluno.nome));
// console.log(nomeAlunos);

// const nomesAlunosVerificados = objAlunos.filter(a => a.nome.includes("t"));
// console.log(nomesAlunosVerificados);

// const nomesAlunosVerificados = objAlunos.find(a => a.nome.includes("t"));
// console.log(nomesAlunosVerificados);

//todos devem possuir a condição
// const nomesAlunosVerificados = objAlunos.every(a => a.nome.includes("t"));
// console.log(nomesAlunosVerificados);

// const nomesAlunosVerificados = objAlunos.some(a => a.nome.includes("e"));
// console.log(nomesAlunosVerificados);

let objAlunos = [
    {id:1,nome:"Felipe",rm:98985},
    {id:2,nome:"Lucas",rm:98986},
    {id:3,nome:"Matheus",rm:98987},
    {id:4,nome:"Augusto",rm:98988},
    {id:5,nome:"Diego",rm:98989},
];

let objNotas = [
    {id:1,nota: 8.9},
    {id:2,nota: 7.4},
    {id:3,nota: 9.2},
    {id:4,nota: 5.1},
    {id:5,nota: 3.7},
];

//Gerar novo objeto a partir dos alunos e notas com MAP

const alunosComNotas = objAlunos.map(a =>{
    //retornando um obj nota de acordo com o ID do aluno
    const nota = objNotas.find(n => n.id === a.id);
    //Montando o nobo objeto aluno com notas para retorno na array
    // return {id:a.id, nome:a.nome, rm:a.rm, nota:nota.nota};
    return {...a, nota:nota.nota};
});

console.log(alunosComNotas);

//utilizando o reduce ppara consolidar o total das notas dos alunos
//o 0 é o valor inicial, necessario para comecar
const somaDasNotas = alunosComNotas.reduce((acumulado, alunos) =>{
    return(acumulado + alunos.nota);
},0);
console.log(somaDasNotas);