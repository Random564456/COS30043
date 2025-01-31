const app = Vue.createApp({
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      students: [
        { name: "Amy", mark: 90 }, { name: "Bill", mark: 80 }, { name: "Casey", mark: 78 },
        { name: "David", mark: 84 }, { name: "Ella", mark: 76 }, { name: "Frank", mark: 88 },
        { name: "Grace", mark: 92 }, { name: "Hannah", mark: 85 }, { name: "Ian", mark: 70 },
        { name: "Jack", mark: 83 }, { name: "Kara", mark: 89 }, { name: "Liam", mark: 95 },
        { name: "Mia", mark: 77 }, { name: "Nathan", mark: 80 }, { name: "Olivia", mark: 91 },
        { name: "Paul", mark: 73 }, { name: "Quinn", mark: 68 }, { name: "Rachel", mark: 82 },
        { name: "Steve", mark: 87 }, { name: "Tina", mark: 79 }, { name: "Uma", mark: 74 },
        { name: "Victor", mark: 81 }, { name: "Wendy", mark: 86 }, { name: "Xander", mark: 67 },
        { name: "Yara", mark: 72 }, { name: "Zoe", mark: 88 },
      ],
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.students.length / this.perPage);
    },
    paginatedStudents() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.students.slice(start, start + this.perPage);
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
});

app.mount("#app");
