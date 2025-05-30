import { createApp, type ComponentOptions } from 'vue'
import CourseChecklist from './components/CourseChecklist'
import NameInput from './components/NameInput'
import type { Data } from './types/Data.type'

{
    const Description = {
        template: "This is the app's entrance"
    }

    const App1 = {
        // template: '<Description />'
        // template: "This is the app's entrance",
        // template: "<div>This is the app's entrance</div>",
        template: `
    <h1>This is the app's entrance</h1>
    <h2>We are exploring template syntax</h2>
    `,
        render() {
            return "This is the app's entrance"
        },
        components: { Description }
    }

    const app1 = createApp(App1)
    app1.mount('#app1')
}

{
    const App2 = {
        template: `
    <div>Title: {{ title }}</div>`,
        data() {
            return {
                title: 'My first Vue component'
            }
        },
        created() {
            console.log((this as ComponentOptions<Data>).title)
        }
    }

    const app2 = createApp(App2)
    app2.mount('#app2')
}

{
    /* How reactivity works */
    const App3 = {
        data() {
            return {
                counter: 1
            }
        },
        template: `<div>Counting to ten: {{ counter }}</div>`,
        created() {
            const interval = setInterval(() => {
                this.counter++
            }, 1000)

            setTimeout(() => {
                clearInterval(interval)
            }, 10000)
        }
    }

    const app3 = createApp(App3)
    app3.mount('#app3')
}

{
    /* Two way binding */
    const App4 = {
        components: { NameInput },
        template: '<NameInput />'
    }

    const app4 = createApp(App4)
    app4.mount('#app4')
}

{
    const App5 = {
        components: { CourseChecklist },
        template: '<CourseChecklist />'
    }

    const app5 = createApp(App5)
    app5.mount('#app5')
}
