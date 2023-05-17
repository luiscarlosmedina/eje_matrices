function convBin() {
    let num = parseInt(document.getElementById("valor5").value);
    let respuesta = document.getElementById("E8");

    bin = []
    while (num >= 1) {
        if ((num % 2) == 0) {
            bin.push(0);
            num = num / 2;
        } else {
            bin.push(1);
            num = Math.floor(num / 2);
        }
    }

    respuesta.value = bin.reverse().join("");
}
