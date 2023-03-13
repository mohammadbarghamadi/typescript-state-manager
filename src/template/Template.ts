import Container from "../modules/Container";


export interface StatesTemplateInt {
    itemList: HTMLDivElement
    clear():void
    render():void
}

export default class StatesTemplate implements StatesTemplateInt {
    static instance: StatesTemplate = new StatesTemplate()
    itemList: HTMLDivElement
    private constructor () {
        this.itemList = document.querySelector('#list-item') as HTMLDivElement
        
    }

    clear(): void {
        
    }

    render(): void {
        
    }
}