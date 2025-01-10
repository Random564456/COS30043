const { createApp } = Vue

const app = createApp()

app.component('retrieve-json', {
    data: () => {
        return {
            data: []
        }
    },
    template: 
    `<div class="container" v-for="element in data">
        <p>{{element.id}} -- {{element.title}}</p>
    </div>`,
    mounted() {
        $.getJSON('https://jsonplaceholder.typicode.com/posts', (data) => {this.data = data}).fail(() => alert('Could not retrieve'))
    },
})

app.mount('#app')