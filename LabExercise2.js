// Question 1

Gretter = (myArray) => {
    let greetText = 'Hello ';
    for (let index of myArray) {
        console.log(greetText + index);
    }

}
console.log("\n----- Question 1 -----");
Gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'])
console.log("----------------------\n");

// Question 2

Capitalize = (string) => {    
    let result = [...string[0].toUpperCase(), ...string.slice(1)];
    result = result.join("")
    return result;
}

console.log("\n----- Question 2 -----");
console.log("fooBar : " + Capitalize("fooBar"));
console.log("nodeJs : " + Capitalize("nodeJs"));
console.log("----------------------\n");

// Question 3

CapitalizeUsingMap = (myArray) => {
    let result = myArray.map(element => Capitalize(element))
    return result;
}

console.log("\n----- Question 3 -----");
console.log("Capitalized Array : " + CapitalizeUsingMap(['red', 'green', 'blue']));
console.log("----------------------\n");

// Question 4

FilterValues = (myArray) => {
    let result = myArray.filter(item => item < 20)
    return result;
}

console.log("\n----- Question 4 -----");
console.log("Numbers less than 20 : " + FilterValues([1, 60, 34, 30, 20, 5]));
console.log("----------------------\n");

// Question 5

CalculateSumUsingReduce = (myArray) => {
    let result = myArray.reduce((sum, number) => sum + number)
    return result;
}

CalculateProductUsingReduce = (myArray) => {
    let result = myArray.reduce((product, number) => product * number)
    return result;
}

console.log("\n----- Question 5 -----");
console.log("Sum : " + CalculateSumUsingReduce([1, 2, 3, 4]));
console.log("Product : " + CalculateProductUsingReduce([1, 2, 3, 4]));
console.log("----------------------\n");

// Question 6

class Car {
    constructor (model, year) {
        this.model = model;
        this.year = year;
    }

    details () {
        return "Model : " + this.model + "\nYear : " + this.year;
    }
}

class Sedan extends Car {
    constructor (model, year, balance) {
        super(model, year)
        this.balance = balance;
    }

    info () {
        return this.model + " has a balance of $" + this.balance;
    }
}

console.log("\n----- Question 6 -----");
const car1 = new Car('Hyundai Elantra', 2019)
const sedan1 = new Sedan('Honda Accord', 2022, 45000)
console.log(car1.details());
console.log(sedan1.info());
console.log("----------------------\n");

