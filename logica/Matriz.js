let mt1 = 0
function GenMat() {
    let muestra = document.getElementById("valor15");
    muestra.innerHTML = " "
    let table = document.createElement("table");
    let tcuerpo = document.createElement("tbody");
    let matriz = [];
    let h = 0;
    while (h < 6) {

        matriz.push(Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)));
        h++;
    }
    for (const f in matriz) {
        let fila = document.createElement("tr");
        for (const c in matriz[f]) {
            let celda = document.createElement("td");
            let contcel = document.createTextNode(matriz[f][c]);
            celda.appendChild(contcel);
            celda.id = 'cell-' + f + '-' + c;
            fila.appendChild(celda);
        }
        tcuerpo.appendChild(fila);
    }
    table.appendChild(tcuerpo);
    muestra.appendChild(table);


    mt1 = matriz

}

function ParMat() {
    m1 = mt1
    let f = 0;
    while (f < m1.length) {
        if (m1[f][f] % 2 == 0) {
            document.getElementById('cell-' + f + '-' + f).style.background = "#b7dd8a";
            f++;
        } else {
            f++;
        }
    }
}

function MxMnMat() {
    let m2 = mt1;
    let max = document.getElementById("E19X");
    let min = document.getElementById("E19N");
    let mx = 0;
    let mn = 99;
    for (const f in m2) {
        for (const c in m2[f]) {
            if(m2[f][c]>mx){
                mx=m2[f][c];
            }
            if(m2[f][c]<mn){
                mn=m2[f][c];
            }
        }
    }
    max.value = "el numero mayor es "+mx;
    min.value = "el numero menor es "+mn;
}