import Container from "../modules/Container";


export interface StatesTemplateInt {
    itemList: HTMLDivElement
    clear(): void
    render(container: Container): void
}

export default class StatesTemplate implements StatesTemplateInt {
    static instance: StatesTemplate = new StatesTemplate()
    itemList: HTMLDivElement
    private constructor() {
        this.itemList = document.querySelector('#list-items') as HTMLDivElement
    }

    clear(): void {
        console.log(this.itemList)
        this.itemList.innerHTML = ''
    }

    render(container: Container): void {
        this.clear()

        container.list.forEach(item => {
            const element = document.createElement('div')
            element.className = 'state'

            const title = document.createElement('h3')
            const description = document.createElement('p')
            const increase = document.createElement('button')
            const decrease = document.createElement('button')
            const activator = document.createElement('input')

            title.textContent = item.title
            description.textContent = item.description

            increase.textContent = 'Increase'
            decrease.textContent = 'Decrease'

            increase.className = 'inc'
            decrease.className = 'dec'

            increase.addEventListener('click', () => {
                item.increase()
                container.save()
            })
            decrease.addEventListener('click', () => {
                item.decrease()
                container.save()
            })

            activator.checked = true

            element.append(title, description, increase, decrease, activator)

            this.itemList.append(element)

        })
    }
}