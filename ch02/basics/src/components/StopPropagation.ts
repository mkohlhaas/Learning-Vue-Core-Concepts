import type { ComponentOptions } from 'vue';

type Data = {
    printMsg: string
}

export const StopPropagation = {
    template: `<button @click="printMessage">Click me</button>
               <div>{{ printMsg }}</div>`,
    methods: {
        printMessage(e: Event) {
            (this as ComponentOptions<Data>).printMsg = "Button is clicked!"
            if (e) {
                console.log('Stopping propagation!')
                e.stopPropagation();
            }

            console.log('Button is clicked!')
        }
    },
    data(): Data {
        return {
            printMsg: 'Nothing to print yet!'
        }
    }
}

export default StopPropagation 
