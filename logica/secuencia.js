function sumSec() {
	let limite = parseInt(document.getElementById('valor6').value);
	let resultado = document.getElementById("E13");

	let num = 1;
	let sum = 0;
	let secuencia = [];
	while(sum < limite){
		secuencia.push(sum);
		sum += num*num;
		num++;
	}
	let i = 0
	let newSec = [];
	while(i<secuencia.length-1){
		newSec.push(secuencia[i+1]-secuencia[i]);
		i++
	}
	
	let text = newSec.join(" + ");
	resultado.value = text;
}