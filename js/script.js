// Criando Array de objeto-alunos
let objAlunos = [
    { id: 1, nome: "Vitors", rm: 25666 },
    { id: 2, nome: "Marcos", rm: 85342 },
    { id: 3, nome: "Jennifers", rm: 42564 },
    { id: 4, nome: "Davids", rm: 10098 },
    { id: 5, nome: "Lucas", rm: 16020 },
];



// const nomesAlunos = objAlunos.map((aluno, indice, array) => (`O indice é ${indice} e seu nome é: ${aluno.nome}`));

// console.log(nomesAlunos);



//########################## FILTER #########################

// const nomeAlunosVerificados = objAlunos.filter( a => a.nome.includes ("a"));

// console.log(nomeAlunosVerificados);


//########################## FIND #########################

// const nomesAlunosVerificados = objAlunos.find(a => {
//     if (a.nome[1] === "A" || a.nome[1] === "a") {
//         return a.nome;
//     }
// });
// console.log(nomesAlunosVerificados);


//########################## EVERY #########################

// const nomesAlunosVerificados = objAlunos.every(a => {
//     if (a.nome[1] === "A" || a.nome[1] === "a") {
//         return a.nome;
//     }
// });

// const nomesAlunosVerificados = objAlunos.every(a => a.nome.includes("s"));
// console.log(nomesAlunosVerificados);


//########################## SOME #########################


// const nomesAlunosVerificados = objAlunos.some(a => a.nome.includes("J"));
// console.log(nomesAlunosVerificados);


let objNotas = [
    { id: 1, nota: 10 },
    { id: 2, nota: 9 },
    { id: 3, nota: 8 },
    { id: 4, nota: 7 },
    { id: 5, nota: 6 },
];

//Gerar novo objeto a partir dos alunos e notas com MAP:

const alunosComNotas = objAlunos.map( a => {
    //Retornando um obj nota de acordo com o ID do aluno 
    const nota = objNotas.find( n => n.id === a.id)
    // Montando o novo objeto aluno com notas para retorno no array 

    // return {
    //     id:a.id,
    //     nome: a.nome,
    //     rm:a.rm,
    //     nota:nota.nota
    // }

    return { ...a, nota: nota.nota}
})

// console.log(alunosComNotas);

//Utilizando o reduce para consolidar o total das notas dos alunos:
const somaDasNotas = alunosComNotas.reduce((acumulado, aluno) => {
    return(acumulado + aluno.nota)
},0)

console.log(somaDasNotas)