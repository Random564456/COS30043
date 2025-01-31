const { createApp } = Vue;

const app = createApp({
    methods: {
        goToURL: () => {}
    }
});

const NameTest = {
  data() {
    return {
      string: "Please enter your name:",
      strName: "Alex",
    };
  },
  template: `
  <div class="container m-5">
        <h1>String Test</h1>
        <hr/>
        <p>Please enter your name: </p>
        <input type="text" v-model="strName" >
        <p v-if="strName.toLowerCase() === 'alex'">Awesome Name!</p>
        <p v-else="strName != 'alex'">{{ strName}} is not my name!</p>
  </div>`,
};

const postManagement = {
  data: function () {
    return {
      statPosts: [],
      strStatus: "",
    };
  },
  // define the template for the component
  template: `
        <div class="container m-5">
         <h1>Post Management</h1>
         <hr/>
          <div>
            <span>
              <slot/> <input type="text" name="status" id="status" v-model="strStatus" />
              <button type="button" class="mx-2 rounded" @click="add(strStatus)">Post</button>
            </span>
          </div>
          <hr/>
          <div class="mt-3">
          <h5>Status Updates</h5>
            <p v-for="(status, index) in statPosts" :key="index">
            {{status}} <button @click="del(index)" class="rounded" type="button">Del</button>
            </p>
          </div>
        </div>
      `,
  // defining the methods for add and remove status messages
  methods: {
    add: function (status) {
      // push status into statPosts array
      this.statPosts.push(status);
      this.strStatus = "";
    },
    del: function (index) {
      // delete status from statPosts using index
      this.statPosts.splice(index, 1);
    },
  },
};

const studentMarks = {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      students: [
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
      ],
    };
  },
  template: `
        <div id="app" class="container m-5">
      <h1>Student Marks</h1>
      <hr/>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Mark</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in paginatedStudents" :key="student.name">
            <td>{{ student.name }}</td>
            <td>{{ student.mark }}</td>
          </tr>
        </tbody>
      </table>
      <hr/>
      <!-- Pagination Controls -->
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: currentPage <= 1 }">
            <a class="page-link" href="#" @click.prevent="prevPage">&laquo;</a>
          </li>
          <li v-for="number in pageCount" :key="number" 
              class="page-item" :class="{ active: number === currentPage }">
            <a class="page-link" href="#" @click.prevent="changePage(number)">{{ number }}</a>
          </li>

          <li class="page-item" :class="{ disabled: currentPage >= pageCount }">
            <a class="page-link" href="#" @click.prevent="nextPage">&raquo;</a>
          </li>
        </ul>
      </nav>

      <p class="mt-3">Current Page: {{ currentPage }}</p>
    </div>
      `,
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
};

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/name-test",
      component: NameTest,
    },
    {
      path: "/post-management",
      component: postManagement,
    },
    {
        path: "/student-marks",
        component: studentMarks
    }
  ],
});

app.use(router);
app.mount("#app");
