function crecimiento() {
    let resultado = document.getElementById('E12');

    let A = 25.0;
    let B = 18.9;

    let TA = 0.02;
    let TB = 0.03;

    let AF=0;
    let BF=0;
 
    let n = 0;
    console.log(A,B);
    while (BF<=AF) {
        AF = A * Math.pow((1 + TA), n);
        BF = B * Math.pow((1 + TB), n);
        n++;
    }
    let agno = 2022 + n;
    resultado.value = agno;
}