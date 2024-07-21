class SuperHero {
    constructor(name){
        this.name = "ben";
    }
    
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name
    }
}

module.exports = new SuperHero()