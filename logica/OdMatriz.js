let mt = 0;
function CreaMt(){
    let muestra = document.getElementById("valor16");
    muestra.innerHTML = " "
    let table = document.createElement("table");
    let tcuerpo = document.createElement("tbody");
    let matriz = [];
    let h = 0;
    while (h < 6) {

        matriz.push(Array.from({ length: 6 }, () => Math.floor(Math.random() * 30)));
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
    mt = matriz;
}

function OrdenMt(){
    let m1 = mt;
    let ub = parseInt(document.getElementById("valor17").value)-1;
    let ot = document.getElementById("sel").value;
    let respuesta = document.getElementById("E20");
    let color  = "rgb("+Math.floor(Math.random() * 230)+","+Math.floor(Math.random() * 230)+","+Math.floor(Math.random() * 230)+")"

    function compara(a,b){return a-b}
    if(ot == 0){
        m1= mt;
        let nuevo = m1[ub].sort(compara);
        let y = 0;
        while(y<6){
            document.getElementById('cell-' + ub + '-' + y).style.background = color;
            y++;
        }
        respuesta.value = nuevo;
    }else{
        let nm1=[]
        let x = 0;
        while(x<6){
            m1= mt;
            nm1.push(m1[x][ub])
            document.getElementById('cell-' + x + '-' + ub).style.background = color;
            x++;
        }
        let nuevo = nm1.sort(compara);
        respuesta.value = nuevo;
    }
}