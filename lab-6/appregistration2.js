const app = Vue.createApp({
  data() {
    return {
      fName: "",
      lName: "",
      uName: "",
      password: "",
      RePassword: "",
      Email: "",
      StreetAddress: "",
      Suburb: "",
      Postcode: "",
      Mobile: "",
      showTerms: false,
      errors: {}
    };
  },
  methods: {
    validate: function () {
        
    }
  },
});

app.mount("#app");
