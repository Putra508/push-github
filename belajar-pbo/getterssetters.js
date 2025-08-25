/*
mengambil property brand dan factory dari objek dengan perintah get dan mengubah 
nilai objek dengan set dalam class*/
class Car{
    constructor(brand,factory) {
        this._carname = brand;
        this._factory = factory;
    
}
get carname() {
    return this._carname;
}
set carname(x) {
    this._carname = x;
}
get factory() {
    return this._factory;
}
set factory(x) {
    this._factory = x;
}
}

// Instansiasi objek dengan nama objek newcar
newcar = new Car('Pajero', 'Mitsubishi');
newcar.carname = 'Alphard' //mengubah nilai carname
newcar.factory = 'Toyota'; //mengubah nilai factory
console.log(newcar.carname);
console.log(newcar.factory);