function Promedio() {
	let num = document.getElementById('valor2A').value;
	let peso = document.getElementById('valor2B').value;
	let respuesta = document.getElementById('E4')


	let array = String(num).split(",").map((num) => {
		return Number(num)
	})
	let pesos = String(peso).split(",").map((peso) => {
		return Number(peso)
	})
	console.log(array);
	console.log(pesos);
	if (array.length === pesos.length) {
		let nuevoNum = 0;
		let nuevoPes = 0;
		for (let i = 0; i < array.length; i++) {
			nuevoNum += array[i] * pesos[i];
			nuevoPes += pesos[i];
		}
		nuevoNum = nuevoNum / nuevoPes;
		respuesta.value = nuevoNum;
	}else{
		alert("cantidades no coinciden");
	}
}