//1.
function doble(a) {
    return a * 2;
}
function triple(a) {
    return a * 3;
}
function apply(num, operacion) {
    return operacion(num);
} 


//2.
function suma(num1, num2) {
    return num2 + num1;
}
function resta(num1, num2) {
    return num1 - num2;
}
function multiplicacion(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return 0;
    }
    return num1 * num2;
}
function division(num1, num2) {
    if (num2 == 0) {
        return 'No se puede dividir por 0';
    }
    return num1 / num2;
}

function calculadora(n1, n2, operacion) {
    return operacion(n1, n2);
}


//3.
function agregarHttp(url) {
    return "http://" + url;
}

function procesar(sitios, agregarHttp) {
    return sitios.map((url) => agregarHttp(url));
}
