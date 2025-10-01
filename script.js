

function calcularMedia(numeros) {

    if (!numeros.length) {
        return 0; 
    }
    return numeros.reduce((a, b) => a + b, 0) / numeros.length;
}

function encontrarMaximo(numeros) {

    let maximo = 0;
    for (let num of numeros) {
        if (num > maximo) {
            maximo = num;
        }
    }
    return numeros.length === 0 ? null : maximo;
}

function filtrarPares(numeros) {
    return numeros.filter(num => typeof num === 'number' && num % 2 === 0);
}


function formatarData(data) {

    return data.toLocaleDateString('pt-BR');
}


console.log("=== Testes das Funções ===");


console.log("Média de [1, 2, 3, 4, 5]:", calcularMedia([1, 2, 3, 4, 5]));
console.log("Média de array vazio:", calcularMedia([]));


console.log("Máximo de [10, 5, 8, 20, 3]:", encontrarMaximo([10, 5, 8, 20, 3]));
console.log("Máximo de [-1, -5, -3]:", encontrarMaximo([-1, -5, -3]));


console.log("Pares em [1, 2, 3, 4, 5, 6]:", filtrarPares([1, 2, 3, 4, 5, 6]));
console.log("Pares com string:", filtrarPares([1, 2, '3', 4]));


console.log("Data atual:", formatarData(new Date()));