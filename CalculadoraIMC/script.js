//Deselvolvido por charlon-156

   document.head.onload = addFav()

    function addFav() {
        const nwLink = document.createElement('link')
        const title = document.querySelector('#title')

        nwLink.rel = "shortcut icon"; 
        nwLink.href = "https://img.freepik.com/vetores-gratis/letra-da-fonte-botanica-c_53876-89205.jpg?w=2000"
        
        title.insertAdjacentElement("beforebegin", nwLink)
    }
    
    const calcular = document.getElementById('btn')
    calcular.addEventListener("click", calculaImc);
    
    function calculaImc() {
        var nome = document.getElementById('inp-nom').value
        var alt = document.getElementById('inp-alt').value
        var pes = document.getElementById('inp-pes').value
        var opc = document.getElementsByName('sex')
        var resultado = document.getElementById('res')
        
        var classe
        
        //vericador de dados
        if (nome !== "" && alt !== "" && pes !== "") {
            const imc = (pes / (alt * 2)).toFixed(2)

            //verificar se é homem
            if (opc[1].checked) {
                if (imc > 43) {
                    classe = "Obesidade Morbida"
                } else if (imc >= 30){
                    classe = "Obesidade"
                } else if (imc >= 25) {
                    classe = "Sobrepeso"
                } else if (imc >= 20){
                    classe = "Peso Normal"
                } else if (imc < 20){
                    classe = "abaixo do pesinho"
                }

            } else if (opc[0].checked) {
                if (imc > 39) {
                    classe = "Obesidade Morbida"
                } else if (imc >= 29){
                    classe = "Obesidade"
                } else if (imc >= 24) {
                    classe = "Sobrepeso"
                } else if (imc >= 19){
                    classe = "Peso Normal"
                } else if (imc < 19){
                    classe = "abaixo do pesinho"
                }

            }

            resultado.innerText = `${nome} seu imc é ${imc}. Logo, sua classificação é ${classe}`

            
        } else {
            resultado.innerText= "Resultado: erro"
        }
    }
