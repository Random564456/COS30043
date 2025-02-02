const { createApp } = Vue;

const app = createApp({});

const NavBar = {
  data() {
    return {};
  },
  template: `
            <nav class="navbar bg-body-tertiary mx-5">
                <div class="container-fluid">
                    <a class="btn btn-secondary" href="#/login">Login</a>
                </div>
            </nav>
        `,
  methods: {},
};

const Login =
  ("Login",
  {
    data() {
      return {
        username: "",
        password: "",
        error: false,
      };
    },
    methods: {
        goToDashBoard() {
            if (this.username === "admin" && this.password === "admin") {
                this.error= false
                this.$router.replace('/dashboard');
            }
            this.error = true;
        },
        resetInputs() {
            this.error= false;
            this.username = "";
            this.password = "";
        },
    },
    template: `
        <div class="d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column m-5 p-3 align-self-center justify-self-center align-items-start border rounded-3 w-50">
                <h3 >Login</h3>
                <p v-if="error" class="text-danger">Incorrect credentials.<br> Hint: Try 'admin' for both inputs.</p>
                <div class="input-group flex-nowrap pt-3">
                    <span class="input-group-text" id="addon-wrapping"></span>
                    <input 
                    type="text" 
                    v-model="username"
                    class="form-control" 
                    placeholder="Username" 
                    aria-label="Username" 
                    aria-describedby="addon-wrapping">
                </div>
                <div class="input-group flex-nowrap pt-3">
                    <span class="input-group-text" id="addon-wrapping"></span>
                    <input 
                    type="password"
                    v-model="password"
                    class="form-control" 
                    placeholder="Password" 
                    aria-label="Username" 
                    aria-describedby="addon-wrapping">
                </div>
                <div class="pt-4 d-flex gap-2">
                    <button type="button" @click="goToDashBoard" class="btn btn-primary">Login</button>
                    <button type="button" class="btn btn-danger" @click="resetInputs" >Reset</button>
                </div>
            </div>
        </div>
        `,
  });





const Dashboard = (
    "dashboard",
    {
        template: `
         <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Description</th>
                        <th scope="col">cp</th>
                        <th scope="col">Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="unit in paginateClass" :key="unit.code">
                        <td>{{unit.code}}</td>
                        <td>{{unit.desc}}</td>
                        <td>{{unit.cp}}</td>
                        <td>{{unit.type}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item" :class="{ disabled: currentPage <= 1 }">
                    <a class="page-link" href="#" @click.prevent="prevPage">&laquo;</a>
                </li>
                <li
                    v-for="number in pageCount"
                    :key="number"
                    class="page-item"
                    :class="{ active: number === currentPage }"
                >
                    <a class="page-link" href="#" @click.prevent="changePage(number)">{{ number }}</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage >= pageCount }">
                    <a class="page-link" href="#" @click.prevent="nextPage">&raquo;</a>
                </li>
            </ul>
      </nav>`,
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

    }
)

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/login",
      component: Login,
    },
    {
        path: "/dashboard",
        component: Dashboard
    }
  ],
});

app.component("navbar", NavBar);
app.use(router);
app.mount("#app");
