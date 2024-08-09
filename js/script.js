// Arrays da galera,

//declarar um array de objetos
let objAlunos = [
    {idAluno:1, nomeAluno:"Lucas", rm:555118},
    {idAluno:2, nomeAluno:"Nica", rm:555119},
    {idAluno:3, nomeAluno:"Giua", rm:555117},
];

let objNotas = [
    {idAluno:1, nota: 9},
    {idAluno:2, nota: 8},
    {idAluno:3, nota: 7},
];

//mapa para gerar um novo array,
                                    //a ordem eh essa ponto zé,
const nomesAlunos = objAlunos.map( (aluno,indice,array) => (indice + 1) + " - " + aluno.nomeAluno);
//console.log(nomesAlunos);


//filter eh uma função de array, primeiro item eh o item da array
const nomesAlunosVer = objAlunos.filter( (aluno2) => aluno2.nomeAluno.includes("a") );
// console.log(nomesAlunosVer);

const alunosComNota = objAlunos.map( (aluno) => {
    const nota = objNotas.find((n)=> n.idAluno === aluno.idAluno);
    return {...aluno, nota:nota.nota}
})

// console.log(alunosComNota);

// soma as notas dos alunos
const somaDasNotas = alunosComNota.reduce((acumulado,aluno) => {
    return(acumulado + aluno.nota);
},0);

console.log(somaDasNotas);
