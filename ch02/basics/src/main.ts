import { createApp, type ComponentOptions } from 'vue'

import type { Data } from './types/Data.type'

import NameInput from './components/NameInput'
import CourseChecklist from './components/CourseChecklist'
import ImageComp from './components/ImageComp'
import List from './components/List'
import TaskList from './components/TaskList'
import Collection from './components/Collection'
import PrintMessage from './components/PrintMessage'
import StopPropagation from './components/StopPropagation'
import StopModifier from './components/StopModifier'
import InputWithKeyEnter from './components/InputWithKey'
import ConditionalRender from './components/ConditionalRender'
import WithVHtml from './components/WithVHtml'
import WithVText from './components/WithVText'
import WithVOnce from './components/WithVOnce'
import MemoedList from './components/MemoedList'

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
        components: { Description },
        template: '<Description />',
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

    type Data = {
        counter: number
    }

    const App5 = {
        data(): Data {
            return {
                counter: 1
            }
        },
        template: `<div>Counting: {{ counter }} </div>`,
        created() {
            const interval = setInterval(() => {
                (this as ComponentOptions<Data>).counter++ // App5 should be of type Component (but leads to different errors)
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
    // two way binding

    const App6 = {
        components: { NameInput },
        template: '<NameInput />',
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

{
    const App8 = {
        components: { ImageComp },
        template: '<ImageComp />'
    }

    const app8 = createApp(App8)
    app8.mount('#app8')
}

{
    const App9 = {
        components: { List },
        template: '<List />'
    }

    const app9 = createApp(App9)
    app9.mount('#app9')
}

{
    const App10 = {
        components: { TaskList },
        template: '<TaskList />'
    }

    const app10 = createApp(App10)
    app10.mount('#app10')
}

{
    const App11 = {
        components: { Collection },
        template: '<Collection />'
    }

    const app11 = createApp(App11)
    app11.mount('#app11')
}

{
    const App12 = {
        components: { PrintMessage },
        template: '<PrintMessage />'
    }

    const app12 = createApp(App12)
    app12.mount('#app12')
}

{
    const App13 = {
        components: { StopPropagation },
        template: '<StopPropagation />'
    }

    const app13 = createApp(App13)
    app13.mount('#app13')
}

{
    const App14 = {
        components: { StopModifier },
        template: '<StopModifier />'
    }

    const app14 = createApp(App14)
    app14.mount('#app14')
}

{
    const App15 = {
        components: { InputWithKeyEnter },
        template: '<InputWithKeyEnter />'
    }

    const app15 = createApp(App15)
    app15.mount('#app15')
}

{
    const App16 = {
        components: { ConditionalRender },
        template: '<ConditionalRender />'
    }

    const app16 = createApp(App16)
    app16.mount('#app16')
}

{
    const App17 = {
        components: { WithVHtml },
        template: '<WithVHtml />'
    }

    const app17 = createApp(App17)
    app17.mount('#app17')
}

{
    const App18 = {
        components: { WithVText },
        template: '<WithVText />'
    }

    const app18 = createApp(App18)
    app18.mount('#app18')
}

{
    const App19 = {
        components: { WithVOnce },
        template: '<WithVOnce />'
    }

    const app19 = createApp(App19)
    app19.mount('#app19')
}

{
    const App20 = {
        components: { MemoedList },
        template: '<MemoedList />'
    }

    const app20 = createApp(App20)
    app20.mount('#app20')
}

{
    // Register a component globally (compare with App2)

    const MyComponent = {
        template: 'This is my global component!'
    }

    const app = createApp({
        template: '<MyComponent />'
    });

    // From now on 'MyComponent' can be used in any nested component of 'app' (and 'app' itself of course).
    app.component('MyComponent', MyComponent)
    app.mount('#app21')
}
