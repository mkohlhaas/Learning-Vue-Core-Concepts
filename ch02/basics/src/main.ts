import { createApp, type ComponentOptions } from 'vue'
import NameInput from './components/NameInput'
import CourseChecklist from './components/CourseChecklist'

import type { Data } from './types/Data.type'

{
    const App1 = {
        template: "I. This is the app's entrance"
    }

    const app1 = createApp(App1)
    app1.mount('#app1')
}

{
    const Description = {
        template: "II. This is the app's entrance"
    }

    const App2 = {
        template: '<Description />',
        components: { Description }
    }

    const app2 = createApp(App2)
    app2.mount('#app2')
}

{
    const App3 = {
        render() {
            return "III. This is the app's entrance"
        }
    }

    const app3 = createApp(App3)
    app3.mount('#app3')
}

{
    const App4 = {
        template: `<div>Title: {{ title }} </div>`,
        data() {
            return {
                title: 'My first Vue component!'
            }
        },
        created() {
            console.log((this as ComponentOptions<Data>).title)
        }
    }

    const app4 = createApp(App4)
    app4.mount('#app4')
}

{
    // How reactivity works

    const App5 = {
        template: `<div>Counting: {{ counter }}</div>`,
        data() {
            return {
                counter: 1
            }
        },
        created() {
            const interval = setInterval(() => {
                this.counter++ // App5 should be of type Component (but leads to different errors)
            }, 1000)

            setTimeout(() => {
                clearInterval(interval)
            }, 9000)
        }
    }

    const app5 = createApp(App5)
    app5.mount('#app5')
}

{
    /* Two way binding */
    const App6 = {
        template: '<NameInput />',
        components: { NameInput }
    }

    const app6 = createApp(App6)
    app6.mount('#app6')
}

{
    const App7 = {
        components: { CourseChecklist },
        template: '<CourseChecklist />'
    }

    const app7 = createApp(App7)
    app7.mount('#app7')
}
