export class Customer
{
    //constructor
    constructor(private _firstName: string, private _lastName: string)
    {
        
    }
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
}

//commands:
//tsc --init  'these command creates .json file'
//In that file = edit the target : "es5"
//And add "noEmitOnError": true,
//the .json file automatically compiles all the flags automatically
//then in terminal: tsc <enter>, and node <filename.js>