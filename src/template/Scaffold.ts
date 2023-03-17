


export default class Structure {

    static building: Structure = new Structure()

    render() {

        const app = document.querySelector('#app') as HTMLDivElement

        const userInputSection = document.createElement('section') as HTMLDivElement
        const contentSection = document.createElement('section') as HTMLDivElement

        app.append(userInputSection, contentSection)

        const container00 = document.createElement('div') as HTMLDivElement
        const container01 = document.createElement('div') as HTMLDivElement

        container01.id = 'list-items'

        const form = document.createElement('form') as HTMLFormElement

        form.addEventListener('submit', (e) => {
            e.preventDefault()
        })

        const input = document.createElement('input') as HTMLInputElement
        const button = document.createElement('button') as HTMLButtonElement

        input.placeholder = 'State Name'
        input.id = 'user-input'

        button.textContent = 'Add'

        userInputSection.append(container00)
        contentSection.append(container01)

        container00.append(form)

        form.append(input, button)

    }

}