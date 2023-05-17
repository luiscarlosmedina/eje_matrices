function MCD() {
    let num1 = parseInt(document.getElementById("valor8").value);
    let num2 = parseInt(document.getElementById("valor9").value);
    let respuesta = document.getElementById("C16");

    let mcd = 0;
    let lista = [];
    while (mcd == 0) {
        if ((num1 % 2) == 0 && (num2 % 2) == 0) {
            console.log(num1 = num1 / 2)
            num2 = num2 / 2
            lista.push(2);
            mcd = mcd;
        } else if ((num1 % 3) == 0 && (num2 % 3) == 0) {
            num1 = num1 / 3
            num2 = num2 / 3
            lista.push(3);
            mcd = mcd;
        } else if ((num1 % 5) == 0 && (num2 % 5) == 0) {
            num1 = num1 / 5
            num2 = num2 / 5
            lista.push(5);
            mcd = mcd;
        } else if ((num1 % 7) == 0 && (num2 % 7) == 0) {
            num1 = num1 / 7
            num2 = num2 / 7
            lista.push(7);
            mcd = mcd;
        } else {
            mcd = 1;
        }
    }
    let i = 0;
    let maxDiv = 1;
    while (i < lista.length) {
        maxDiv *= lista[i];
        i++;
    }
    console.log(maxDiv);
    respuesta.value = maxDiv;
}


