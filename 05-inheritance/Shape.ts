export class Shape
{
    public get X(): number {
        return this._X;
    }
    public set X(value: number) {
        this._X = value;
    }
    public get Y(): number {
        return this._Y;
    }
    public set Y(value: number) {
        this._Y = value;
    }
    constructor(private _X: number,private _Y: number){}

   

    getInfo(): string
    {
        return `x = ${this._X} y = ${this._Y}`;
    }
}