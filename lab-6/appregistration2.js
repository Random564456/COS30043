const app = Vue.createApp({
  data() {
    return {
      fname: "",
      lname: "",
      username: "",
      password: "",
      rePassword: "",
      email: "",
      streetAddress: "",
      suburb: "",
      postcode: "",
      mobile: "",
      showTerms: false,
      errors: {}
    };
  },
  methods: {
    toggleTerms() {
      this.showTerms = !this.showTerms;
    },
    validate() {
      this.errors = {};
      let isValid = true;
      if (!this.fname || !this.fname.match(/^[a-zA-Z]+$/)) {
        this.errors.fname = "letters only (Required)"
        isValid = false;
      }
      if(!this.lname || !this.lname.match(/^[a-zA-Z]+$/)) {
        this.errors.lname = "letters only (Required)"
        isValid = false;
      }
      if(!this.username || this.username.length < 3) {
        this.errors.username = "min 3 characters (Required)"
        isValid = false;
      }
      if (!this.password.match(/^(?=.*[$%^&*]).{8,}$/)) {
        this.errors.password = "at least 1 special character, minimum 8 characters are required, special characters are $, %, ^, &, and *"
        isValid = false;
      }
      if (this.password !== this.rePassword) {
        this.errors.rePassword = "must match above password"
        isValid = false;
      }
      if (!this.email || !this.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        this.errors.email = "must be in email format and required"
        isValid = false;
      }
      if (this.streetAddress.length > 40) {
        this.errors.streetAddress = "must be at max 40 characters"
        isValid = false;
      }
      if (this.suburb.length > 20) {
        this.errors.suburb = "must be at max 20 characters"
        isValid = false;
      }
      if (!this.postcode.match(/\d{4,4}/)) {
        this.errors.postcode = "exactly 4 numeric digits and required, note some postcodes start with 0"
        isValid = false;
      }
      if (!this.mobile.match(/[04]+\d{8,8}/)) {
        this.errors.mobile = "10 digits, must start with 04"
        isValid = false;
      }

      if (isValid) {
        this.$refs.form.submit();
      }
    }
  },
});

app.mount("#app");
