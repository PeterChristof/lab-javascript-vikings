// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
attack() {
  return this.strength;
}
receiveDamage(damageReceived) {
  this.health = this.health - damageReceived
}

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
super(health, strength);
this.name = name;
  }
  attack () {
    super.attack();
    return this.strength;
  }
  receiveDamage(damageReceived) {
    this.health -= damageReceived;
    if (this.health > 0) {
      return `${this.name} has received ${damageReceived} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
    
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}


// Saxon
class Saxon extends Soldier {

receiveDamage(damageReceived){
  super.receiveDamage(damageReceived);
  if (this.health > 0) {
    return `A Saxon has received ${damageReceived} points of damage`;
  } else {
    return "A Saxon has died in combat"
  }
}}

// War
class War {
constructor(){
  this.vikingArmy = [];
  this.saxonArmy = [];
}
  addViking(Viking){
this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }
  vikingAttack(){
let IndexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
let IndexrandomViking = Math.floor(Math.random() * this.vikingArmy.length);
let randomViking = this.vikingArmy[IndexrandomViking];
let randomSaxon = this.saxonArmy[IndexRandomSaxon];
let result = randomSaxon.receiveDamage(randomViking.attack());

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(IndexRandomSaxon, 1)
    }

   return result

  }
  saxonAttack(){
    let IndexrandomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let IndexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[IndexRandomSaxon];
    let randomViking = this.vikingArmy[IndexrandomViking];
    let result = randomViking.receiveDamage(randomSaxon.attack());
    
        if (randomViking.health <= 0) {
          this.vikingArmy.splice(IndexrandomViking, 1)
        }
        return result
  }
  showStatus(){
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length <= 0) {
        return "Saxons have fought for their lives and survived another day..."
      } else {
       return "Vikings and Saxons are still in the thick of battle."
      }

    }
    }




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
