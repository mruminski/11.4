function Car(manufacture, model, price) {
  this.manufacture = manufacture;
  this.model = model;
  this.price = price;
}

Car.prototype.printData = function() {
  console.log('The car is produced by ',this.manufacture,' model: ',this.model,
'price in euro: ',this.price,'.');
}

var mini = new Car('Aston-Martin', 'Miny Countryman', 23.900);
var ford = new Car('Ford', 'Mustang', 58.730);
var fiat = new Car('Fiat', '500', 19.800);

mini.printData();
ford.printData();
fiat.printData();