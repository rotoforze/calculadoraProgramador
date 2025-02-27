function separador(x) {

    let numeros = [];

    let longitud = x.toString().length;

    for (i = 0; i<longitud; i++) {

        let substrato = Math.floor(x/10); //ej: de 123 da 12

        let unidades = x-(substrato*10); // ej: de 123 va a devolver 3

        x = substrato;
        numeros[i] = unidades;


    }

    return numeros;
}

function convertir() {

    let numero = document.getElementById("numero").value;

    var x = document.getElementById("sel").selectedIndex;
    var y = document.getElementById("sel").options;

    switch (y[x].text) {
        case "Decimal a Binario":
            document.getElementById("resultado").innerHTML = decimalABinario(numero);
            break;
        case "Decimal a Octal":
            document.getElementById("resultado").innerHTML = decimalAOctal(numero);
            break;
        case "Decimal a Hexadecimal":
            document.getElementById("resultado").innerHTML = decimalAHexadecimal(numero);
            break;  
        case "Octal a Binario":
            document.getElementById("resultado").innerHTML = octalABinario(numero);
            break;
        case "Octal a Decimal":
            document.getElementById("resultado").innerHTML = octalADecimal(numero);
            break;
        case "Octal a Hexadecimal":
            document.getElementById("resultado").innerHTML = octalAHexadecimal(numero);
            break;
        case "Hexadecimal a Decimal":
            document.getElementById("resultado").innerHTML = hexadecimalADecimal(numero);
            break;
        case "Hexadecimal a Binario":
            document.getElementById("resultado").innerHTML = hexadecimalABinario(numero);
            break;
        case "Hexadecimal a Octal":
            document.getElementById("resultado").innerHTML = hexadecimalAOctal(numero);
            break;
        case "Binario a Decimal":
            document.getElementById("resultado").innerHTML = binarioADecimal(numero);
            break;
        case "Binario a Octal":
            document.getElementById("resultado").innerHTML = binarioAOctal(numero);
            break;
        case "Binario a Hexadecimal":
            document.getElementById("resultado").innerHTML = binarioAHexadecimal(numero);
            break;
        default:
            console.log("Error seleccione!!");
            document.getElementById("resultado").innerHTML = "Error seleccione elemento!!";
    }
}

/* de decimal a... */

function decimalABinario(decimal) {

    let resultado = "";

    let numero = decimal;

    let imprimir = "";

    while (numero!=0) {
        imprimir += " | "+numero+"/2 ";

        imprimir += "= "+(numero%2)+"\n";
        resultado += numero%2;

        numero /= 2;
        numero = Math.floor(numero);
        
    }
     
    let resultadoVolteado = resultado.split("").reverse().join("");

    console.log("Resultado de pasar de decimal a binario: "+resultadoVolteado);
    console.log(imprimir);
    document.getElementById("proceso").innerHTML = imprimir;

    return "" + resultadoVolteado;

}

function decimalAOctal(decimal) {

    let resultado = "";

    let numero = decimal;

    let imprimir = "";

    while (numero!=0) {
        imprimir += " | "+numero+"/8 ";

        imprimir += "= "+(numero%8)+"\n";
        resultado += numero%8;

        numero /= 8;
        numero = Math.floor(numero);
        
    }
     
    resultado = resultado.split("").reverse().join("");

    let resultadoVolteado = resultado.split("").reverse().join("");

    console.log("Resultado de pasar de decimal a octal: "+resultadoVolteado);
    console.log(imprimir);
    document.getElementById("proceso").innerHTML = imprimir;

    return resultado;

} 

function decimalAHexadecimal(decimal) {

    let resultado = "";

    let numero = decimal;
    let imprimir = "";

    while (numero != 0) {
        imprimir += " | " + numero + "/16 ";

        let resto = numero % 16;
        imprimir += "= " + resto;

        let letra = "";

        switch (resto) {
            case 10:
                letra = "A";
                break;
            case 11:
                letra = "B";
                break;
            case 12:
                letra = "C";
                break;
            case 13:
                letra = "D";
                break;
            case 14:
                letra = "E";
                break;
            case 15:
                letra = "F";
                break;
            default:
                letra = resto.toString();
        }

        numero = Math.floor(numero / 16);

        imprimir += " resultado: " + letra + "\n";
        resultado += letra;
        document.getElementById("proceso").innerHTML = imprimir;
    }

    let resultadoVolteado = resultado.split("").reverse().join("");

    console.log("Resultado de pasar de decimal a hexadecimal: " + resultadoVolteado);
    console.log(imprimir);
    document.getElementById("proceso").innerHTML = imprimir;

    return resultadoVolteado;
}

/* Octal a ... */

function octalABinario(octal) {
    let separados = separador(octal);

    let imprimir = "";

    for (i = 0; i<separados.length; i++) {

        let a = decimalABinario(separados[i]);



        if (a == 1){
            imprimir += " | 00"+a+"";
        }else if(a == 10 | a == 11){
            imprimir += " | 0"+a;
        }else imprimir += " | "+a;


        console.log(imprimir);
    }

    imprimirVolteado = imprimir.split("").reverse().join("");

    console.log("\nResultado de pasar de octal a binario: "+imprimirVolteado);
    console.log(imprimir);
    document.getElementById("proceso").innerHTML = imprimir;

    return resultadoVolteado;
}


function octalADecimal(octal) {

    let numSeparados = separador(octal);

    let resultado = 0;
    let multiplo = 0;

    let imprimir = "";

    for (i = 0; i<numSeparados.length; i++) {

        multiplo *= 8;
        if (i == 0) multiplo = 1;

        imprimir += multiplo+" * "+numSeparados[i]+" = "+(numSeparados[i]*multiplo)+"\n"

        resultado += numSeparados[i] * multiplo;
    }


    console.log("Resultado de pasar de octal a decimal: "+resultado);
    console.log(imprimir);
    document.getElementById("proceso").innerHTML = imprimir;

    return "" + resultado;
}

// Hexadecimal a Decimal
function hexadecimalADecimal(hex) {
    // Validate input
    if (!/^[0-9A-Fa-f]+$/.test(hex)) {
        console.log("Error: Invalid hexadecimal input");
        document.getElementById("proceso").innerHTML = "No es un número hexadecimal válido";
        return "Error";
    }
    let resultado = 0;
    let imprimir = "";
    let base = 1;

    for (let i = hex.length - 1; i >= 0; i--) {
        let valor = hex[i].toUpperCase().charCodeAt(0);
        if (valor >= 65 && valor <= 70) {
            valor = valor - 55; // A-F -> 10-15
        } else {
            valor = valor - 48; // 0-9 -> 0-9
        }
        resultado += valor * base;
        imprimir += `${valor} * ${base} = ${valor * base}\n`;
        base *= 16;
    }

    console.log("Resultado de pasar de hexadecimal a decimal: " + resultado);
    console.log(imprimir);
    document.getElementById("proceso").innerHTML = imprimir;

    return "" + resultado;
}

// Hexadecimal a Binario
function hexadecimalABinario(hex) {
    let decimal = hexadecimalADecimal(hex);
    let resultado = "";
    let imprimir = "";
    let numero = parseInt(decimal);

    while (numero != 0) {
        imprimir += ` | ${numero}/2 = ${numero % 2}\n`;
        resultado = (numero % 2) + resultado;
        numero = Math.floor(numero / 2);
    }

    console.log("Resultado de pasar de hexadecimal a binario: " + resultado);
    console.log(imprimir);
    document.getElementById("proceso").innerHTML = imprimir;

    return resultado;
}

// Hexadecimal a Octal
function hexadecimalAOctal(hex) {
    let decimal = hexadecimalADecimal(hex);
    let resultado = "";
    let imprimir = "";
    let numero = parseInt(decimal);

    while (numero != 0) {
        imprimir += ` | ${numero}/8 = ${numero % 8}\n`;
        resultado = (numero % 8) + resultado;
        numero = Math.floor(numero / 8);
    }

    console.log("Resultado de pasar de hexadecimal a octal: " + resultado);
    console.log(imprimir);
    document.getElementById("proceso").innerHTML = imprimir;

    return resultado;
}

// Octal a Hexadecimal
function octalAHexadecimal(octal) {
    let decimal = octalADecimal(octal);
    let resultado = "";
    let imprimir = "";
    let numero = parseInt(decimal);

    while (numero != 0) {
        let resto = numero % 16;
        let letra = resto >= 10 ? String.fromCharCode(resto + 55) : resto;
        imprimir += ` | ${numero}/16 = ${letra}\n`;
        resultado = letra + resultado;
        numero = Math.floor(numero / 16);
    }

    console.log("Resultado de pasar de octal a hexadecimal: " + resultado);
    console.log(imprimir);
    document.getElementById("proceso").innerHTML = imprimir;

    return resultado;
}

// Binario a Decimal
function binarioADecimal(binario) {
    let resultado = 0;
    let imprimir = "";
    let base = 1;

    for (let i = binario.length - 1; i >= 0; i--) {
        let valor = binario[i] - '0';
        resultado += valor * base;
        imprimir += `${valor} * ${base} = ${valor * base}\n`;
        base *= 2;
    }

    console.log("Resultado de pasar de binario a decimal: " + resultado);
    console.log(imprimir);
    document.getElementById("proceso").innerHTML = imprimir;

    return "" + resultado;
}

// Binario a Octal
function binarioAOctal(binario) {
    let decimal = binarioADecimal(binario);
    let resultado = "";
    let imprimir = "";
    let numero = parseInt(decimal);

    while (numero != 0) {
        imprimir += ` | ${numero}/8 = ${numero % 8}\n`;
        resultado = (numero % 8) + resultado;
        numero = Math.floor(numero / 8);
    }

    console.log("Resultado de pasar de binario a octal: " + resultado);
    console.log(imprimir);
    document.getElementById("proceso").innerHTML = imprimir;

    return resultado;
}

// Binario a Hexadecimal
function binarioAHexadecimal(binario) {
    let decimal = binarioADecimal(binario);
    let resultado = "";
    let imprimir = "";
    let numero = parseInt(decimal);

    while (numero != 0) {
        let resto = numero % 16;
        let letra = resto >= 10 ? String.fromCharCode(resto + 55) : resto;
        imprimir += ` | ${numero}/16 = ${letra}\n`;
        resultado = letra + resultado;
        numero = Math.floor(numero / 16);
    }

    console.log("Resultado de pasar de binario a hexadecimal: " + resultado);
    console.log(imprimir);
    document.getElementById("proceso").innerHTML = imprimir;

    return resultado;
}