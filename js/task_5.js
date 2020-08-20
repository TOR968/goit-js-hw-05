class Car {
  // Write code under this line

  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
  }
  constructor(car) {
    (this.maxSpeed = car.maxSpeed),
      (this.speed = 0),
      (this.isOn = Boolean),
      (this.distance = 0),
      (this._price = car.price);
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    (this.isOn = false) || (this.speed = 0);
  }
  accelerate(value) {
    if (this.speed <= this.maxSpeed) {
      this.speed += value;
    }
  }
  decelerate(value) {
    if ((this.speed += value > 0)) {
      this.speed = 0;
    } else if (this.speed > 0) {
      this.speed -= value;
    }
  }
  drive(hours) {
    if ((this.isOn = true)) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// ('maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000');

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
