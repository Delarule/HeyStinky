class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
     console.log(`${this.name} стоит неподвижно.`);
  }

}

class Rabbit extends Animal {
  hide() {
     console.log(`${this.name} прячется!`);
  }

  stop() {
    super.stop(); 
    this.hide();
  }
}

class Power extends Rabbit {
   run(speed) {
    this.speed = speed;
    console.log(`${this.name} Теперь бежит со скоростью ${this.speed}.`);
  }
}

let rabbit = new Rabbit("Белый кролик");
let power = new Power("сила");

rabbit.run(5); 
rabbit.stop(); 