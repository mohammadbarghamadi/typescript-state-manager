

export interface StateInt {
    title: string
    description: string
    id: string
    activator(): void
    increase(): void
    decrease(): void
    count(): number
}

export default class State implements StateInt {

    constructor(
        private _working: boolean = false,
        private _count: number = 0,
        private _id: string,
        public title: string,
        public description: string
    ) {
        this.title = title
        this.description = description
    }

    get id() {
        return this._id
    }

    set id(id: string) {
        this._id = id
    }

    activator(): void {
        this._working = !this._working
    }

    increase(): void {
        this._count = this._count++
    }

    decrease(): void {
        this._count = this._count--
    }

    count(): number {
        return this._count
    }

}