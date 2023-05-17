function ParImpar(){
	let respuesta = document.getElementById('E2')
	let numP =[];
	let numI=[];
	for (var i = 0; i <= 100; i+=2) {
		numP.push(i);
	}
	for (var j = 101; j <= 200; j+=2) {
		numI.push(j)
	}
	numP.shift()
	numI.shift()
	let finalNum = numP.concat(numI)
	respuesta.innerHTML = finalNum;
}