function BuscaLt() {
    let frase = document.getElementById("valor13").value;
    let letra = document.getElementById("valor14").value;

    let arFrase = frase.split("");
    let i = 0;
    while (i < arFrase.length) {
        if (arFrase[i] == letra) {
            console.log("encontrado en posicion " + i);
            i++;
        } else {
            console.log("no se encuentra");
            i++;
        }
    }
}
