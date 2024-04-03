<script>
export default
{
    name:"Input",
    data()
    {
        return{
            search:"",
        }
    },
    methods:
    {
        loggg()
        {
            console.log(this.search);
        }
    }
}
</script>

<template>
<input type="text" placeholder="Search..." v-model="search" @keyup="loggg()">
</template>

<style>

</style>
