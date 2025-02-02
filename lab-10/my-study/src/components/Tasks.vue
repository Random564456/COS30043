<template>
    <div>
        <h3>Enter Tasks</h3>
      <span>
        <input type="text" name="status" id="status" v-model="strStatus" />
        <button type="button" @click="add(strStatus)">
          Post
        </button>
      </span>
    </div>
    <div class="m-3">
      <p v-for="(status, index) in statPosts" :key="index">
        {{ status }}
        <button @click="del(index)" type="button">Del</button>
      </p>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      statPosts: [],
      strStatus: "",
    };
  },
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
</script>

<style scoped>
</style>
