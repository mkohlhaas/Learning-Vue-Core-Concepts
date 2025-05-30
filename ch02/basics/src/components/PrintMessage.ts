import type { ComponentOptions } from "vue"

type Data = {
    printMsg: string
}

export const PrintMessage = {
    template: `<button @click="printMessage">Click me</button>
               <div>{{ printMsg }}</div>`,
    methods: {
        printMessage() {
            (this as ComponentOptions<Data>).printMsg = "Button is clicked!"
            console.log('Button is clicked!')
        }
    },
    data(): Data {
        return {
            printMsg: 'Nothing to print yet!'
        }
    }
}

export default PrintMessage
