// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){ this.health -= damage; }
}

// Viking
class Viking extends Soldier {
  constructor(name,health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health -= damage;
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`; 
  }
  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`; 
  }
}

// War
class War {

  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  
  vikingAttack(){
    let i = Math.floor(this.vikingArmy.length * Math.random());
    let j = Math.floor(this.saxonArmy.length * Math.random()); 
    const viking = this.vikingArmy[i];
    const saxon = this.saxonArmy[j];
    
    if(saxon.health >= 0) this.saxonArmy.splice(j, 1);
    return saxon.receiveDamage(viking.strength);
    
  }

  saxonAttack(){
    let i = Math.floor(this.saxonArmy.length * Math.random());
    let j = Math.floor(this.vikingArmy.length * Math.random()); 
    const saxon = this.saxonArmy[i];
    const viking = this.vikingArmy[j];

    if(viking.health >= 0) this.vikingArmy.splice(j, 1);
    return viking.receiveDamage(saxon.strength);
  }

  showStatus(){
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    }else if(!this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    }else{
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
