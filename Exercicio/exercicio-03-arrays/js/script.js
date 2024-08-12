const listaSalario = [1400, 4000, 4500, 2000, 3000, 7000, 5900, 6000, 1000, 900];

const novoSalario = listaSalario.map(a => {
    if (a <= 2000){
        return (Math.round(a * 1.15));
    }else{
        return (Math.round(a * 1.10));
    }
})

console.log(`Lista com acrecimo de valores: ${novoSalario}`);

const salarioMaior = novoSalario.filter( a => a > 2500);

console.log(`Salarios maiores que 2500: ${salarioMaior}`);

const somaSalario = salarioMaior.reduce((acumulado, salario) => acumulado + salario, 0);

console.log(`Salarios somados: ${somaSalario}`);