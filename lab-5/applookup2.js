let units = [
  {
    code: "ICT10001",
    desc: "Problem Solving with ICT",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "COS10005",
    desc: "Web Development",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "INF10003",
    desc: "Introduction to Business Information Systems",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "INF10002",
    desc: "Database Analysis and Design",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "COS10009",
    desc: "Introduction to Programming",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "INF30029",
    desc: "Information Technology Project Management",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "ICT30005",
    desc: "Professional Issues in Information Technology",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "ICT30001",
    desc: "Information Technology Project",
    cp: 12.5,
    type: "Core",
  },
];

// creating a component for the units to pass in the router
const Unit = {
  props: ["id"],
  data() {
    return { units };
  },
  // define the template for the route results
  template: `<div id='container'> 
                <h2> {{ $route.params.id }}</h2>
                <ul v-for="unit in filteredUnits">
                    <li>{{ unit.code }}</li>
                    <li>{{ unit.desc }}</li>
                    <li>{{ unit.cp }}</li>
                    <li>{{ unit.type }}</li>
                </ul>
             </div>`,
  computed: {
    // filter function (returns the selected unit object)
    filteredUnits() {
      return this.units.filter((unit) =>
        unit.code.toLowerCase().match(this.$route.params.id.toLowerCase()),
      );
    },
  },
};

// Creating the VueRouter
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/unit/:id",
      component: Unit,
    }, // defining path and the component
  ],
});

const app = Vue.createApp({});

// creating component for the lookup table
app.component("app-lookup2", {
  data: function () {
    return { units };
  },
  // defining template for the app
  template: `
    
  <div class="container">
    <h1>Unit information System</h1>
           <!--  TABLE ON CLASSES  -->
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
         <tr>
           <th scope="col">Code</th>
           <th scope="col">Description</th>
           <th scope="col">More Info</th>
         </tr>
        </thead>
        <tbody>
            <!-- ITERATE THROUGH UNITS AND DISPLAY IN TABLE -->
            <tr v-for="unit in units">
              <td>{{unit.code}}</td>
              <td>{{unit.desc}}</td>
              <td><router-link :to="{ path: '/unit/' + unit.code }">Read More</router-link></td>
            </tr>
        </tbody>
      </table>
    </div>
            <!-- SELECTED UNIT INFORMATION -->
    <div>
      <div class="col-lg-12">
        <router-view></router-view>
      </div>
    </div>
  </div>`,
});

app.use(router);
app.mount("#app");
