{
  class Car {
    name: string;
    brand: string;
    model: string;
    year: number;
    constructor(name: string, brand: string, model: string, year: number) {
      this.name = name;
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
    displayInfo() {
      console.log(` "Your car model is: ${this.model}  ${this.year} ${this.brand}  ${this.name}"`);
    }
  }

  const result = new Car("Corolla", "Toyota", "CL-TM120 ", 2020);
  result.displayInfo();
}
