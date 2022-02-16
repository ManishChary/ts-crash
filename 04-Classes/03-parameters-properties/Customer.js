"use strict";
var Customer = /** @class */ (function () {
    //constructor
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
//commands:
//tsc --init  'these command creates .json file'
//In that file = edit the target : "es5"
//And add "noEmitOnError": true,
//the .json file automatically compiles all the flags automatically
//then in terminal: tsc <enter>, and node <filename.js>
