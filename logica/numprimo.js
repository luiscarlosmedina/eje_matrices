function GenList() {
	let muestra = document.getElementById("E15G");
    let arr1 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

    muestra.innerHTML = arr1;
}
function BusPrimo() {
    let lista = document.getElementById("E15G").innerHTML;
    let arr1 = String(lista).split(",").map((lista) => {
        return Number(lista)
    })
    let respuesta = document.getElementById("E15B");


    let primos=[2,3,5,7];
    let num=0;
    let val = 0;
    while(num<100){
    	
    	if ((num%2)==0) {
    		val=val;
    	}else if((num%3)==0) {
    		val=val;
    	}else if((num%5)==0){
    		val=val;
    	}else if((num%7)==0){
    		val=val;
    	}else{
    		val=1;
    	}
    	if(val==1){
    		primos.push(num)
    	}
    	num++;
    	val = 0;
    }


    num = 0;
    let j = true;
    let responde = "";
	while(num <= arr1.length && j==true){
		let i = 0;
		while(i<primos.length && j==true){
			if(arr1[num]==primos[i]){
				responde = "Primo numero " + arr1[num] + " en posicion " + (num+1);
				j=false;
			}
			i++;
		}
		num++;
	}  
	respuesta.value = responde;

}