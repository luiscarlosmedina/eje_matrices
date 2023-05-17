function multiplica() {
	let arr1=document.getElementById('arr1').value;
	let arr2=document.getElementById('arr2').value;
	let respuesta = document.getElementById('E10')

	let uno = String(arr1).split(",").map((arr1) => {
        return Number(arr1)
    })

    let dos = String(arr2).split(",").map((arr2) => {
        return Number(arr2)
    })

    let operacion=[]

    if (uno.length!=dos.length){
    	alert("los arreglos no son de igual tamaño")
    }else{
    	for (var i = 0; i < uno.length; i++) {
    		operacion.push(uno[i]*dos[i])
    	}
    	respuesta.value = operacion;

    }
}