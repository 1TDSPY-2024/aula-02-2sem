
let objFuncionarios = [
    { id: 1, nome: "Paulo", salario: 1200 },
    { id: 2, nome: "Ana", salario: 5500 },
    { id: 3, nome: "Marcelo", salario: 3000 },
    { id: 4, nome: "Clara", salario: 1700 },
    { id: 5, nome: "Alex", salario: 10000 },
    { id: 6, nome: "Marcio", salario: 2000 },
    { id: 7, nome: "Claudia", salario: 2000 },
    { id: 8, nome: "Isabela", salario: 4000 },
    { id: 9, nome: "Luiz", salario: 1000 },
    { id: 10, nome: "Arthur", salario: 1500 },


];

const listaSalariosAtualizado = objFuncionarios.map(a => {
    if (a.salario <= 2000) {
        return (Math.round(a.salario * 1.15));
    } else {
        return (Math.round(a.salario * 1.10));
    }
})

console.log(`Salários com aumentos: ${listaSalariosAtualizado}`);

const listaSalarioMaiorQue2500 = listaSalariosAtualizado.filter(a => a > 2500);

console.log(`Salários maiores que 2500: ${listaSalarioMaiorQue2500}`);

const somatorioSalarioMaiorQue2500 = listaSalarioMaiorQue2500.reduce((acumulado, salario) => acumulado + salario, 0);

console.log(`Salários maiores que 2500 somados: ${somatorioSalarioMaiorQue2500}`);