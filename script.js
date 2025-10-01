// Funções com bugs para demonstração

function calcularMedia(numeros) {
    // Bug 1: Não trata array vazio corretamente
    if (!numeros.length) {
        return 0; // Deveria retornar null ou undefined
    }
    return numeros.reduce((a, b) => a + b, 0) / numeros.length;
}

function encontrarMaximo(numeros) {
    if (numeros.length === 0) return null; // Corrigido: trata array vazio
    let maximo = numeros[0]; // Corrigido: considera negativos
    for (let num of numeros) {
        if (num > maximo) {
            maximo = num;
        }
    }
    return maximo;
}


function filtrarPares(numeros) {
    // Bug 3: Não filtra corretamente valores não numéricos
    return numeros.filter(num => num % 2 === 0);
}

function formatarData(data) {
    // Função adicional para mais um bug
    return data.toLocaleDateString('pt-BR');
}

// Testes
console.log("=== Testes das Funções ===");

// Teste 1: Média
console.log("Média de [1, 2, 3, 4, 5]:", calcularMedia([1, 2, 3, 4, 5]));
console.log("Média de array vazio:", calcularMedia([]));

// Teste 2: Máximo
console.log("Máximo de [10, 5, 8, 20, 3]:", encontrarMaximo([10, 5, 8, 20, 3]));
console.log("Máximo de [-1, -5, -3]:", encontrarMaximo([-1, -5, -3]));

// Teste 3: Pares
console.log("Pares em [1, 2, 3, 4, 5, 6]:", filtrarPares([1, 2, 3, 4, 5, 6]));
console.log("Pares com string:", filtrarPares([1, 2, '3', 4]));

// Teste 4: Data
console.log("Data atual:", formatarData(new Date()));