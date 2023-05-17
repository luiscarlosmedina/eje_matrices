function ParDes() {
 	let num = document.getElementById('valor').value;
 	let respuesta = document.getElementById('E3')
 	if(num%2!=0){
 		num-=1
 	}
 	let salida=[]
 	for (let i = num; i >= 2; i-=2) {
 		salida.push(i)
 	}
 	respuesta.innerHTML = salida;
 }