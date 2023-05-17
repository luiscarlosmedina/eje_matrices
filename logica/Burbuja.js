function genArr() {
    let muestra = document.getElementById("E18G");
    let arr1 = Array.from({ length: 20 }, () => Math.floor(Math.random() * 50));

    muestra.innerHTML = arr1;
}


function ordenArr() {
    let lista = document.getElementById("E18G").innerHTML;
    let respuesta = document.getElementById("E18O");

    let arr = String(lista).split(",").map((lista) => {
        return Number(lista)
    })
    let x = 0;
    while(x < arr.length){
        let i = 0;
        while(i < arr.length){
            let aux = 0;
            if(arr[i] > arr[i+1]){
                aux += arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = aux;
                aux = 0;
                i++;
            }else{
                i++;
            }
        }
        x++;
    } 
    
    respuesta.value = arr.join(" ");
}