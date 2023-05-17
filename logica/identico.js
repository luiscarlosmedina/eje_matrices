let mtA = 0;
let mtB = 0;

function CrearA(){
    let muestra = document.getElementById("valor18");
    muestra.innerHTML = " "
    let table = document.createElement("table");
    let tcuerpo = document.createElement("tbody");
    let matriz = [];
    let h = 0;
    while (h < 4) {

        matriz.push(Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)));
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
    mtA = matriz;
}

function CrearB(){
    let muestra = document.getElementById("valor19");
    muestra.innerHTML = " "
    let table = document.createElement("table");
    let tcuerpo = document.createElement("tbody");
    let matriz = [];
    let h = 0;
    while (h < 4) {

        matriz.push(Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)));
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
    mtB = matriz;
}

function nuevaMt(){
    CrearA();
    CrearB();
 
    setTimeout(() => {
        compara()
    }, 1000);
}

function compara(){
    let m1 = mtA;
    console.log(m1);
    let m2 = mtB;
    let respuesta = document.getElementById("E21");

    let estado = 0;
    for (const f in m1) {
        for (const c in m1[f]) {
            if(m1[f][c]==m2[f][c]){
                document.getElementById('cellA-' + f + '-' + c).style.background = "#5cf05c";
                document.getElementById('cellB-' + f + '-' + c).style.background = "#5cf05c";
                estado ++;
            }
        }
    }
    console.log(estado);
    let Mt = (estado/16)*100;
    if(Mt == 0){
        respuesta.value = "No existen coincidencias";  
    }else{
        respuesta.value = "Coinciden en un "+ Mt +"%";
    }
}