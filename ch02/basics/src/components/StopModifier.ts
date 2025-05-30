import type { ComponentOptions } from 'vue';

type Data = {
    printMsg: string
}

export const StopModifier = {
    template: `<button @click.stop="printMessage">Click me</button>
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

export default StopModifier 
