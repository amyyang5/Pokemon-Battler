class Pokemon {
    constructor(name, hitPoints, attackDamage, move = 'tackle') {
        this.name = name;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = move
    }
    takeDamage(num) {
     this.hitPoints -= num
    }
    useMove() {
    console.log(`${this.name} used ${this.move}`)
    return this.attackDamage
    }
    hasFainted() {
        if(this.hitPoints > 0) {
            return false 
        }
        return true
    }
}



module.exports = Pokemon