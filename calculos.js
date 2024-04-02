function sumar(num1, num2) {
    return num1 + num2;
}

console.log("suma de 5 y 10:", sumar(5, 10));

function dividir(num1, num2) {
    if (num2 === 0) {
        return "Error: No se puede dividir por cero";
    } else {
        return num1 / num2;
    }
}

console.log("división de 20 y 2:", dividir(20, 2));
console.log("división de 20 y 0:", dividir(20, 0));

function encontrarMayor(array) {
    return Math.max(...array);
}

console.log("el mayor de la lista es:", encontrarMayor([2, 8, 9, 7, 5, 6]));

