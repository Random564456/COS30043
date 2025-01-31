const { createApp } = Vue

const app = createApp({
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            data: []
        }
    },
    mounted() {
        fetch('units.json').then((res) => res.json())
        .then(data => this.data = data)
        .catch(err => {console.log(err)})
    },
    computed: {
        pageCount() {
          return Math.ceil(this.data.length / this.perPage);
        },
        paginateClass() {
          const start = (this.currentPage - 1) * this.perPage;
          return this.data.slice(start, start + this.perPage);
        },
      },
      methods: {
        changePage(pageNum) {
          if (pageNum >= 1 && pageNum <= this.pageCount) {
            this.currentPage = pageNum;
          }
        },
        nextPage() {
          if (this.currentPage < this.pageCount) {
            this.currentPage++;
          }
        },
        prevPage() {
          if (this.currentPage > 1) {
            this.currentPage--;
          }
        },
      },
})

app.mount('#app')
