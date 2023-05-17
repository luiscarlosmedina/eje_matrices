const binaryInput = document.getElementById("binario");

binaryInput.addEventListener("keypress", function (event) {
    const key = event.which || event.keyCode; // Obtener el código de la tecla presionada
    const value = String.fromCharCode(key); // Obtener el valor de la tecla presionada

    if (value !== "0" && value !== "1") {
        event.preventDefault(); // Prevenir la entrada de cualquier otro valor
    }
});


function convertirEnt() {
    let search = binaryInput.value

    let bin = String(search).split("").map((search) => {
        return Number(search)
    })

    while (bin.length < 8) {
        bin.splice(0, 0, 0)
    }

    let num = [128, 64, 32, 16, 8, 4, 2, 1]
    let numFinal = 0
    for (i = 0; i < num.length; i++) {
        let newNum = num[i] * bin[i]
        if (newNum != 0) {
            numFinal += newNum;
        }
    }
    const resultado = document.getElementById("resultado");

    resultado.value = numFinal;

}