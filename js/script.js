let objAlunos = [
    { id: 1, nome: 'Diego', rm: 558755 },
    { id: 2, nome: 'Augusto', rm: 558756 },
    { id: 3, nome: 'Luis', rm: 558757 },
    { id: 4, nome: 'Melissa', rm: 558758 },
    { id: 5, nome: 'Lucas', rm: 558759 }
];

// const nomesAlunos = objAlunos.map((aluno, indice) => ((indice + 1) + ' - ' + aluno.nome));
// console.log(nomesAlunos);

// const nomesAlunosVerificados = objAlunos.filter(aluno => aluno.nome.includes('a'));
// console.log(nomesAlunosVerificados);

// const nomesAlunosVerificados = objAlunos.find(aluno => aluno.nome.includes('a'));
// console.log(nomesAlunosVerificados);

// const nomesAlunosVerificados = objAlunos.every(aluno => aluno.nome.includes('a'));
// console.log(nomesAlunosVerificados);

// const nomesAlunosVerificados = objAlunos.some(aluno => aluno.nome.includes('a'));
// console.log(nomesAlunosVerificados);

let objNotas = [
    { id: 1, nota: 4.5 },
    { id: 2, nota: 6.8 },
    { id: 3, nota: 9.0 },
    { id: 4, nota: 4.8 },
    { id: 5, nota: 2.3 }
];

const alunosComNotas = objAlunos.map(aluno => {
    const nota = objNotas.find(n => n.id === aluno.id);
    // return { id: aluno.id, nome: aluno.nome, rm: aluno.rm, nota: nota.nota };
    return { ...aluno, nota: nota.nota };
});

// console.log(alunosComNotas);

const somaDasNotas = alunosComNotas.reduce((acumulado, aluno) => {
    return (acumulado + aluno.nota);
}, 0);

console.log(somaDasNotas);
