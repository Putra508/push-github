//method
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }


//method
say() {
    return "Hello, My name is " + this.name + " and i am " + this.age + " year old.";
}
}

//instansiasi
var person1 = new Person("Alice", 30);
console.log(person1.say());
