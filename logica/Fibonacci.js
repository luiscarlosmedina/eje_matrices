function Fibonacci(){
    let final = document.getElementById("valor10").value;
    
    let serie = [1,1];
    let i = 1;
    while (i < final) {
        serie.push(serie[i-1]+serie[i]);
        i++;
    }
    console.log(serie);
}