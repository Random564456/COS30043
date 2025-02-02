<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <div class="home-page">
      <img src="@/assets/vue-js.svg" alt="Vue Logo" class="vue-logo" />
      <div class="navigation">
        <router-link class="nav-button" to="/">Home</router-link>
        |
        <router-link class="nav-button" to="/units">Units</router-link>
        |
        <router-link class="nav-button" to="/tasks">Tasks</router-link>
      </div>
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
.app {
  font-family: Arial, Helvetica, sans-serif;
}
.navigation {
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding-bottom: 20px;
}
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.vue-logo {
  width: 150px;
}
.nav-button {
  font-weight: 600;
  color: rgb(36, 56, 72);
  text-decoration: none;
}
.nav-button:hover {
  color: rgb(62, 184, 118);
  cursor: pointer;
}
</style>
