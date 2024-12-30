const app = Vue.createApp({});

app.component("app-mypost", {
  // defining data to be used in the component
  data: function () {
    return {
      statPosts: [],
      strStatus: "",
    };
  },
// define the template for the component
  template: `
    <div class="container m-5">
      <div>
        <span>
          <slot/> <input type="text" name="status" id="status" v-model="strStatus" />
          <button type="button" class="mx-2 rounded" @click="add(strStatus)">Post</button>
        </span>
      </div>
      <div class="mt-3">
        <p v-for="(status, index) in statPosts" :key="index">
        {{status}} <button @click="del(index)" class="rounded" type="button">Del</button>
        </p>
      </div>
    </div>
  `,
// defining the methods for add and remove status messages
  methods: {
    add: function(status) {
      // push status into statPosts array
      this.statPosts.push(status);
      this.strStatus = "";
    },
    del: function(index) {
       // delete status from statPosts using index
      this.statPosts.splice(index, 1)
    }
  }
});

app.mount("#app");

