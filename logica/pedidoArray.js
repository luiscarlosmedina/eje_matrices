function pedidoArray() {
	let longitud = parseInt(document.getElementById('longitud').value);
	let max = parseInt(document.getElementById("max").value);
	let min = parseInt(document.getElementById("min").value);
	let respuesta = document.getElementById('E6')
	let array = []

	for (let i = 0; i < longitud; i++) {
		array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
	}

	respuesta.value = array;
}