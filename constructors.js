let Animal = function(type, legs, isMammal) {
    this.type = type;
    this.legs = legs;
    this.isMammal = isMammal;

    this.tellAnimal = () => console.log(`I am a ${this.type} with ${this.legs} legs.`);
}

let cat = new Animal('cat', 4, true);
cat.tellAnimal();