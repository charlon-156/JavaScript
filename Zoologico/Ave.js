class Bird extends Animal {
    
    #roastSize

    //Construtor da classe Bird
    constructor (name, roastSize){
        super(nome)
        this.#roastSize = roastSize
    }

    sing() {
        console.log(`${this.getName()} is singing`)
    }

    getRoastSize(){
        return this.#roastSize
    }

    setRoastSize(roastSize){
        this.#roastSize = roastSize
    }
}