function Car(make, model, year, color) {
    // Properties
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.isEngineRunning = false;

    // Methods
    this.start = function() {
        if (!this.isEngineRunning) {
            this.isEngineRunning = true;
            console.log('The engine is now running.');
        } else {
            console.log('The engine is already running.');
        }
    };

    this.stop = function() {
        if (this.isEngineRunning) {
            this.isEngineRunning = false;
            console.log('The engine is now stopped.');
        } else {
            console.log('The engine is already stopped.');
        }
    };

    const myCar = new Car('Toyota', 'Camry', 2022, 'Blue');
    const anotherCar = new Car('Honda', 'Accord', 2021, 'Red');


    console.log(myCar.make); // Output: Toyota
    console.log(anotherCar.model); // Output: Accord

    myCar.start(); // Output: The engine is now running.
    myCar.stop(); //
}