function CreaA() {
    let flA = parseInt(document.getElementById("flA").value);
    let clA = parseInt(document.getElementById("clA").value);
    let muestra = document.getElementById("valor20");
    muestra.innerHTML = " "
    let table = document.createElement("table");
    let tcuerpo = document.createElement("tbody");
    let matriz = [];
    let h = 0;
    while (h < flA) {

        matriz.push(Array.from({ length: clA }, () => Math.floor(Math.random() * 10)));
        h++;
    }
    for (const f in matriz) {
        let fila = document.createElement("tr");
        for (const c in matriz[f]) {
            let celda = document.createElement("td");
            let contcel = document.createTextNode(matriz[f][c]);
            celda.appendChild(contcel);
            celda.id = 'cellA-' + f + '-' + c;
            fila.appendChild(celda);
        }
        tcuerpo.appendChild(fila);
    }
    table.appendChild(tcuerpo);
    muestra.appendChild(table);
    return matriz;
}

function CreaB() {
    let flB = parseInt(document.getElementById("flB").value);
    let clB = parseInt(document.getElementById("clB").value);
    let muestra = document.getElementById("valor21");
    muestra.innerHTML = " "
    let table = document.createElement("table");
    let tcuerpo = document.createElement("tbody");
    let matriz = [];
    let h = 0;
    while (h < flB) {

        matriz.push(Array.from({ length: clB }, () => Math.floor(Math.random() * 10)));
        h++;
    }
    for (const f in matriz) {
        let fila = document.createElement("tr");
        for (const c in matriz[f]) {
            let celda = document.createElement("td");
            let contcel = document.createTextNode(matriz[f][c]);
            celda.appendChild(contcel);
            celda.id = 'cellB-' + f + '-' + c;
            fila.appendChild(celda);
        }
        tcuerpo.appendChild(fila);
    }
    table.appendChild(tcuerpo);
    muestra.appendChild(table);
    return matriz;
}


function Mmult() {
    let respuesta = document.getElementById("valor22");
    respuesta.innerHTML = " "
    let flA = parseInt(document.getElementById("flA").value);
    let clA = parseInt(document.getElementById("clA").value);
    let flB = parseInt(document.getElementById("flB").value);
    let clB = parseInt(document.getElementById("clB").value);

    let A = CreaA()
    let B = CreaB()
    if (clA === flB) {
        console.log("la matriz resultante es  de " + flA + "x" + clB);
        //crea la nueva matriz vacia con 0
        let C = []
        for (let i = 0; i < A.length; i++) {
            C[i] = [];
            for (let j = 0; j < B[0].length; j++) {
                C[i][j] = 0;
            }
        }
        // hacer la multiplicacion
        for (let x = 0; x < A.length; x++) {
            for (let y = 0; y < B[0].length; y++) {
                for (let z = 0; z < B.length; z++) {
                    C[x][y] += A[x][z] * B[z][y];
                }
            }
        }

        //imprimir la matriz
        let table = document.createElement("table");
        let tcuerpo = document.createElement("tbody");
        for (const fl in C) {
            let fila = document.createElement("tr");
            for (const cl in C[fl]) {
                let celda = document.createElement("td");
                let contcel = document.createTextNode(C[fl][cl]);
                celda.appendChild(contcel);
                celda.id = 'cellC-' + fl + '-' + cl;
                fila.appendChild(celda);
            }
            tcuerpo.appendChild(fila);
        }
        table.appendChild(tcuerpo);
        respuesta.appendChild(table);

    } else {
        respuesta.innerHTML = "no es posible esta operacion";
    }


}

