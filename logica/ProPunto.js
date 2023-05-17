function prodPunt() {
    let Luno = String(document.getElementById("arr3").value).split(",").map((arr1) => {
        return Number(arr1)
    })
    let Ldos = String(document.getElementById("arr4").value).split(",").map((arr2) => {
        return Number(arr2)
    })
    let resultado = document.getElementById("E11");

    while (Luno.length < Ldos.length || Ldos.length < Luno.length) {
        if (Luno.length < Ldos.length) {
            Luno.push(0);
        } else {
            Ldos.push(0);
        }
    }
    console.log(Ldos,Luno)
    let Nlista = 0;

    for (let i = 0; i < Luno.length; i++) {
        Nlista += (Luno[i] * Ldos[i]);
    }

    resultado.value = Nlista;
}