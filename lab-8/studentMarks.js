Vue.component('paginate', VuejsPaginate)

new Vue({
    el: '#app',
    data() {
        return {
            studMarks: [
                { name: "Amy", mark: 90 },
                { name: "Bill", mark: 80 },
                { name: "Casey", mark: 78 },
                { name: "David", mark: 84 },
                { name: "Ella", mark: 76 },
                { name: "Frank", mark: 88 },
                { name: "Grace", mark: 92 },
                { name: "Hannah", mark: 85 },
                { name: "Ian", mark: 70 },
                { name: "Jack", mark: 83 },
                { name: "Kara", mark: 89 },
                { name: "Liam", mark: 95 },
                { name: "Mia", mark: 77 },
                { name: "Nathan", mark: 80 },
                { name: "Olivia", mark: 91 },
                { name: "Paul", mark: 73 },
                { name: "Quinn", mark: 68 },
                { name: "Rachel", mark: 82 },
                { name: "Steve", mark: 87 },
                { name: "Tina", mark: 79 },
                { name: "Uma", mark: 74 },
                { name: "Victor", mark: 81 },
                { name: "Wendy", mark: 86 },
                { name: "Xander", mark: 67 },
                { name: "Yara", mark: 72 },
                { name: "Zoe", mark: 88 },
              ]
            }},
    
    computed: {
            paginatedData() {
              const start = (this.currentPage - 1) * this.perPage;
              const end = start + this.perPage;
              return this.studMarks.slice(start, end);
            },
          },
          methods: {
            clickCallback(pageNum) {
              this.currentPage = pageNum;
            },
          },
        });

