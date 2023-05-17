function forToWhile() {
    let respuesta = document.getElementById("E14");
    let a = 0;
    let b = 0;

    let A = [];
    let B = [];

    while (a < 7) {
        A.push(a);
        B.push(b);
        a++;
        b += 2;
    }
    console.log(A, B);

    let table = document.createElement("table");
    let tcuerpo = document.createElement("tbody");
    let y = 0;
    while (y < 7) {
        let fila = document.createElement("tr");
        let celda = document.createElement("td");
        let contcel = document.createTextNode(A[y]);
        celda.appendChild(contcel);
        fila.appendChild(celda);
        celda = document.createElement("td");
        contcel = document.createTextNode(B[y]);
        celda.appendChild(contcel);
        fila.appendChild(celda);
        tcuerpo.appendChild(fila);
        table.appendChild(tcuerpo);
        respuesta.appendChild(table);
        y++;
    }


}
