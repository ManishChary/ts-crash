var Customer = /** @class */ (function () {
    //constructor
    function Customer(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        //generate Getters and Setters
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Manish", "Kumar");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log("*****************************\n");
//these are the commands we have to use wen we use getters and setters
//tsc --target ES5 --noEmitOnError Customer.ts 
//node Customer.js
