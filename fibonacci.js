//con un solo ciclo for calcule los numeros de la serie fibonacci con una variable n para poder poder solicitar el número que se desea calcular y sin funciones

function fibonacci(n) {
    let fib = [0, 1];
    
    if (n <= 2) {
        return fib.slice(0, n);
    }
    
    for (let i = 2; i < n; i++) {
        let nextNum = fib[i - 1] + fib[i - 2];
        fib.push(nextNum);
    }
    
    return fib;
}

let n = 7;
console.log(fibonacci(n));