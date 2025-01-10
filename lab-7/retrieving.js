const { createApp } = Vue

const app = createApp({
    data() {
        return {
            data: []
        }
    },
    methods: {
        
    },
    mounted() {
        fetch('units.json').then((res) => res.json())
        .then(data => this.data = data)
        .catch(err => {console.log(err)})
    },
})

app.mount('#app')
