// MAP retorna dados
// FOREACH não retorna dados
// 
// é necessário passar uma função callback
// array.map(function(valor, indice, array){})
// Declarando um array de objetos de alunos

let alunos = [
    {id: 1, nome: "Vitor", rm:"454533"},
    {id: 2, nome: "Pablo", rm:"397411"},
    {id: 3, nome: "Fernando", rm:"027652"},
    {id: 4, nome: "Felipe", rm:"527343"},
    {id: 5, nome: "Jorge", rm:"783490"}
]


// // Usar o arrow function deixa mais visível e não precisa usar o this.
// const nomesAluno = alunos.map((aluno, indice, array) => ((indice + 1) + " - " + aluno.nome));
// console.log(nomesAluno)
// // Retorna um valor e armazena na variavel

// const nA = alunos.forEach((aluno, indice, array) => ((indice + 1) + " - " + aluno.nome))
// console.log(nA)
// // Não retorna nenhum valor, portanto o valor da variavel é undefined

// const nomeAlunosVerificados = alunos.filter(a => a.nome.includes("a"));
// console.log(nomeAlunosVerificados)

// const nomeA = alunos.find(a => {a.nome.includes("a")});
// console.log(nomeA)

// const nomesEvery = alunos.every(a => {a.nome.includes("a")});
// console.log(nomesEvery)

// const nomeSome = alunos.some(a => {a.nome.includes("a")});
// console.log(nomeSome)

let notas = [
    {id: 1, nota: 7.5},
    {id: 2, nota: 3.5},
    {id: 3, nota: 4},
    {id: 4, nota: 8.2},
    {id: 5, nota: 9}
]

const alunosComNotas = alunos.map(aluno => {
    // Retornando um obj nota de acordo com ID do aluno
    const nota = notas.find(n => n.id === aluno.id)
    // Montando o novo objeto do aluno com notas para retorno do array
    // return {id: aluno.id, nome: aluno.nome, rm: aluno.rm, nota: nota.nota}
    return {...aluno, nota: nota.nota}
})

console.log(alunosComNotas);

const somaNotas = alunosComNotas.reduce((soma, aluno) => {
    return (soma+aluno.nota)
 }, 1)
console.log(somaNotas);