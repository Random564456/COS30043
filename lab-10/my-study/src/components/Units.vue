<template>
 <table class="m-5 w-75 table table-bordered table-hover">
    <thead>
        <tr>
            <td>Code</td>
            <td>Description</td>
            <td>cp</td>
            <td>Type</td>
        </tr>
    </thead>
    <tbody>
        <tr v-for="unit in units">
            <td>{{ unit.code }}</td>
            <td>{{ unit.desc }}</td>
            <td>{{ unit.cp }}</td>
            <td>{{ unit.type }}</td>
        </tr>
    </tbody>
        
  </table>
</template>

<script>
    import Units from "../assets/units.json";
    export default {
        data() {
            return {
                units: Units
            }
        }
    }
</script>

<style scoped>

</style>