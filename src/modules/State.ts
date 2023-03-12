

export interface StateInt {
    activator(): void
    increase(): void
    decrease(): void
}

export default class State implements StateInt {

    constructor(
        private _working: boolean = false,
        private _count: number = 0
    ) { }

    activator(): void {
        this._working = !this._working
    }

    increase(): void {
        this._count = this._count++
    }

    decrease(): void {
        this._count = this._count--
    }

}