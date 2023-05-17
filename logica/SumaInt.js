function SumarEp(){
    let valor = document.getElementById("valor12").value;
    let respuesta = document.getElementById("E17")

    if(valor>0 ){
        let myFunc = num => Number(num);
        let listaNum = Array.from(String(valor), myFunc);
        let suma = 0;

        let i = 0;
        while(i<listaNum.length){
            suma+=listaNum[i];
            i++;
        }
        respuesta.value = suma;

    }else{
        alert("ingrese un valor valido");
    }
    
}