function numRep() {
    let valor = document.getElementById("valor4").value;
    let resultado = document.getElementById("E7");
    let arr1 = Array.from({ length: 15 }, () => Math.floor(Math.random() * 10));
    let contestacion = " ";

    console.log(arr1);
    contador = 0;
    for (i = 0; i < arr1.length; i++) {
        if (valor == arr1[i]) {
            contador++;
        } else {
            contador = contador
        }
    }
    if (contador == 0) {
        contestacion = "El numero " + valor + " no existe";
        resultado.value = contestacion;
    } else {
        if (contador == 1) {
            contestacion = "Numero " + valor + " aparece " + contador + " vez.";
            resultado.value = contestacion;
        } else {
            contestacion = "Numero " + valor + " aparece " + contador + " veces.";
            resultado.value = contestacion;
        }
    }

}