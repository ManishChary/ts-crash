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

//commands:
//tsc --init  'these command creates .json file'
//In that file = edit the target : "es5"
//And add "noEmitOnError": true,
//the .json file automatically compiles all the flags automatically
//then in terminal: tsc <enter>, and node <filename.js>