import createApp from 'vue'

const app = createApp({
    data() {
        
    },
    methods: {
        plus() {
            console.log('plus');
        }
    }
})

app.mount("#app")