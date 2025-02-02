<template>
    <h1>Welcome {{ firstName }} {{ lastName }}</h1>
    <p>What is your name?</p>
    <div>
        <label>First Name </label>
        <input type="text" v-model="firstName">
    </div>
    <div>
        <label>Last Name </label>
        <input type="text" v-model="lastName">
    </div>
    <div>
        <input type="radio" name="Ocean" value="Ocean" v-model="radioSelect">Ocean</input>
        <input type="radio" name="Ocean" value="Mountain" v-model="radioSelect">Mountain</input>
    </div>
    <img v-if="radioSelect === 'Mountain'" src="../assets/mountain.jpg" alt="">
    <img v-if="radioSelect === 'Ocean'" src="../assets/ocean.jpg" alt="">
</template>

<script>

export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            radioSelect: ''
        };
    },
    methods: {
        print() {
            console.log(this.radioSelect)
        }
    }
}
</script>

<style scoped>
</style>
