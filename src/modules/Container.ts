import State from "./State";

export interface ContainerInt {
    list: State[]
    add(state: State): void
    remove(id: string): void
    save(): void
    load(): void
}

export default class Container implements ContainerInt {

    static instance: Container = new Container()

    private constructor(private _list: State[] = []) { }

    get list(): State[] {
        return this._list
    }

    load(): void {
        const items = localStorage.getItem('states')
        if (typeof items !== 'string') return
        const parsed: { _id: string, _title: string, _description: string }[] = JSON.parse(items)

        parsed.forEach(item => {
            const newState = new State(false, 0, item._id, item._title, item._description)
            Container.instance.add(newState)
        })
    }

    save(): void {
        localStorage.setItem('states', JSON.stringify(this._list))
    }

    add(state: State): void {
        this._list.push(state)
        this.save()
    }

    remove(id: string): void {
        this._list.filter(item => item.id !== id)
        this.save()
    }

}