let ar = 0;
function GenArray() {
    let muestra = document.getElementById("E5G");
    let arr1 = Array.from({ length: 15 }, () => Math.floor(Math.random() * 10));
    ar =arr1;
    muestra.value = arr1;
}


function BusArray() {
    let lista = ar;
    let search = parseInt(document.getElementById("valor3").value);
    let muestra = document.getElementById("E5B");

    function busca(dato, index, pos) {

        if (dato == search) {
            d = true
        } else {
            d = d
        }
    }
    let contesta=" ";
    d = false
    lista.forEach(busca);
    let r = lista.indexOf(search)
    if (d == false) {
        contesta="numero no se encontro";
        muestra.innerHTML = contesta;
    } else if (d == true) {
        contesta = "El numero esta en posicion " + (r+1) + "<br/>";
        muestra.innerHTML = contesta;
    }
}