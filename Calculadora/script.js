res = document.querySelector('#respost')

function addFav() {
    const nwLink = document.createElement('link')
    const title = document.querySelector('#title')

    nwLink.rel = "icon"; 
    nwLink.href = "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
    
    title.insertAdjacentElement("beforebegin", nwLink)
}

function screenPrint(number){
    let screen = document.getElementById("screen");
    screen.innerText = screen.innerText+number;
}

function respost(){
    let screen = document.getElementById("screen")
	let exp = screen.innerHTML;
    
    if (exp.indexOf("+") > 0) {
        let numeros = exp.split("+")

        n1 = Number(numeros[0])
        n2 = Number(numeros[1])

        resultado = n1 + n2
        screen.innerHTML = resultado
    }
	
    
	if (exp.indexOf("-") > 0) {
        numeros = exp.split("-")

		n1 = Number(numeros[0])
		n2 = Number(numeros[1])
        
		resultado = n1 - n2
		screen.innerHTML = resultado
	}
    
    if (exp.indexOf("*") > 0) {
        numeros = exp.split("*")

        n1 = Number(numeros[0])
        n2 = Number(numeros[1])

        resultado = n1 * n2
        screen.innerHTML = resultado
    }

	if (exp.indexOf("/") > 0) {
		numeros = exp.split("/")

		n1 = Number(numeros[0])
		n2 = Number(numeros[1])

		resultado = n1 / n2
		screen.innerHTML = resultado
	}
}

//triggers
document.head.onload = addFav();
res.addEventListener('click', respost());