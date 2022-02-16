import { Shape } from "./Shape";
export class Rectangle extends Shape
{
    calculateArea(): number {
        return this._length * this._width;
    }
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }
    constructor(theX: number,they: number,private _length: number,private _width: number)
    {
        super(theX,they);
    }

    getInfo(): string
    {
        return super.getInfo();
    }
}