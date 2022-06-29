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

            if (imc >= 40) {
                classe = "Obesidade Morbida"
            } else if (imc >= 30){
                classe = "Obesidade"
            } else if (imc >= 25) {
                classe = "Sobrepeso"
            } else if (imc >= 18.5){
                classe = "Peso Normal"
            } else if (imc < 18.5){
                classe = "abaixo do pesinho"
            }

            resultado.innerText = `${nome} seu imc é ${imc}. Logo, sua classificação é ${classe}`

        } else {
            resultado.innerText= "Resultado: erro"
        }
    }

    calcular.addEventListener("click", calculaImc);