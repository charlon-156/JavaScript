class Animal{

    #name
    #altura
    #peso
    #year

    constructor (name){
        this.#name = name
    }

    apresentation(){
        console.log(`Helloo, my name is ${this.getName()}`)
    }

    move(){
        console.log(`${this.name} is moving`)
    }

    eat(){
        console.log(`${this.name} is eating`)
    }

    sleep(){
        console.log(`${this.name} is sleeping - zzzz`)
    }

    //Getter and Setter

    getName() {
        return this.#name
    }

    setName(name){
        this.#name = name
    }

    getAltura() {
        return this.#altura
    }

    setAltura(altura){
        this.#altura = altura
    }

    getPeso() {
        return this.#peso
    }

    setPeso(peso){
        this.#peso = peso
    }

    getYear() {
        return this.#year
    }

    setYear(year) {
        this.#year = year
    }
    
}