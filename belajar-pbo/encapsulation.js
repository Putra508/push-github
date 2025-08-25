/*untuk membuat property age 
menjadi private dengan menambahkan tanda # sebelum age. 
*/
class Person {
    #age; //properti benar2 private
    
    constructor(name,age) {
        this.name = name; //Public
        this.#age = age; //Private
    }

    //getter
    getAge() {
        return this.#age;
    }

    //setter dengan validasi
    setAge(newAge) {
        if (newAge < 0 || newAge > 150) {
            console.log('Umur tidak valid');
        } else {
            this.#age = newAge;
        }
    }
}

//instansiasi
var orang = new Person('John', 25);
console.log(orang.name);  
console.log(orang.getAge());

