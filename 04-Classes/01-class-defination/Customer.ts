class Customer
{
    private _firstName: string;
    private _lastName: string;

    //generate Getters and Setters
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    //constructor
    constructor(firstName: string, lastName: string)
    {
        this._firstName=firstName;
        this._lastName=lastName;
    }
}

let myCustomer = new Customer("Manish","Kumar");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

console.log("*****************************\n");

//these are the commands we have to use wen we use getters and setters
//tsc --target ES5 --noEmitOnError Customer.ts 
//node Customer.js