function magia() {
    let mat = [];
    let val = true;

    for (let f = 0; f < 4; f++) {
        let arr = [];
        for (let c = 0; c < 4; c++) {
            let num = parseInt(document.getElementById("mg" + f + "-" + c).value);
            if(num>=1 && num<=16  || num!=NaN || num!=" "){
                arr.push(num)
                val =val;
            }else{
                val = false

            }  
        }
        mat.push(arr)
    }

    let f1 = 0
    let f2 = 0
    let f3 = 0
    let f4 = 0
    let c1 = 0
    let c2 = 0
    let c3 = 0
    let c4 = 0
    let d1 = 0
    let d2 = 0

    let a = 0;
    while (a <= 3) {
        d1 += mat[a][a]
        
        f1 += mat[0][a]
        c1 += mat[a][0]

        f2 += mat[1][a]
        c2 += mat[a][1]

        f3 += mat[2][a]
        c3 += mat[a][2]

        f4 += mat[3][a]
        c4 += mat[a][3]

        a++
    
    }
    a = 3
    while(a>=0){
        d2 +=mat[a][a]
        a--
    }


    if(d2>=0){
        document.getElementById("d2").innerHTML = d2;
    }
    if(d1>=0){
        document.getElementById("d1").innerHTML = d1;
    }
    if(c1>=0){
        document.getElementById("c1").innerHTML = c1;
    }
    if(c2>=0){
        document.getElementById("c2").innerHTML = c2;
    }
    if(c3>=0){
        document.getElementById("c3").innerHTML = c3;
    }
    if(c4>=0){
        document.getElementById("c4").innerHTML = c4;
    }
    if(f1>=0){
        document.getElementById("f1").innerHTML = f1;
    }
    if(f2>=0){
        document.getElementById("f2").innerHTML = f2;
    }
    if(f3>=0){
        document.getElementById("f3").innerHTML = f3;
    }
    if(f4>=0){
        document.getElementById("f4").innerHTML = f4;
    }
    
}