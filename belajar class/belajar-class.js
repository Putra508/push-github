class Car {
    constructor(brand){
        this.brand = brand;
    }
}

// instantiate the class
var pajero = new Car('Mitsubishi');
console.log(pajero.brand); 


// method
class Car2 {
    sound(){
        return "vromm...bib..bib";
    }
}

// instantiate the class
var pajero = new Car2();
console.log(pajero.sound());

// method dgn parameter
class car3 {
    sound(x) {
        return x + ", My car makes a sound like: vromm...bib..bib";
    }
}

var pajero = new car3();
console.log(pajero.sound("Hello"));

//getter dan setter
class Car4{
    constructor(brand){
    this._carname = brand;
    
    }
    get carname() {
    return this._carname;
    
    }
    set carname(x){
        this._carname = x;
    }
}

newcar = new Car ('pajero');
newcar.carname = 'Alphard'; //mengubah nilai carname
console.log(newcar.carname); 