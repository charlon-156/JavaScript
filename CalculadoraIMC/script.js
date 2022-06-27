//Deselvolvido por charlon-156

    const calcular = document.getElementById('btn')
    
    function calculaImc() {
        const nome = document.getElementById('inp-nom').value
        const alt = document.getElementById('inp-alt').value
        const pes = document.getElementById('inp-pes').value
        const resultado = document.getElementById('res')
        var classe

        if (nome !== "" && alt !== "" && pes !== "") {
            const imc = (pes / (alt * 2)).toFixed(2)

            if(imc>8000){

            } else if (imc > 35) {
                classe = "acima do peso"
            } else if (imc < 30 && imc >= 25){
                classe = "levemente acima do peso"
            } else if (imc < 25 && imc >= 18.5) {
                classe = "no peso ideal"
            } else if (imc < 18.5){
                classe = "abaixo do pesinho"
            }

            resultado.innerText = `${nome} seu imc é ${imc}. Logo, tu se encontra ${classe}`

        } else {
            resultado.innerText= "Resultado: erro"
        }
    }

    calcular.addEventListener("click", calculaImc);