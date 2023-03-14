import Structure from "./template/Scaffold";
import State from "./modules/State";
import Container from "./modules/Container";
import StatesTemplate from "./template/Template";

const initial = () => {
    const container = Container.instance
    const template = StatesTemplate.instance

    const input = document.querySelector('#user-input') as HTMLInputElement
    const form = document.querySelector('form') as HTMLFormElement

    form.addEventListener('submit', (e: SubmitEvent): void => {
        e.preventDefault()
        const text = input.value.trim()
        if (!text.length) return

        const itemId = container.list.length
            ? parseInt(container.list[container.list.length - 1].id) + 1
            : 1
        const newItem = new State(true, 0, itemId.toString(), text, '')

        container.add(newItem)

        template.render(container)
    })

    container.load()
    template.render(container)
}

const App = document.querySelector('#app') as HTMLDivElement
App.append(Structure.building.render())

setTimeout(() => initial(), 100)