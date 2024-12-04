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

const Unit = {
  data() {
    return { units };
  },
};

const router = VueRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [{ path: "/", component: Home }],
});

const app = Vue.createApp({});

app.use(router);
app.mount("#app");
