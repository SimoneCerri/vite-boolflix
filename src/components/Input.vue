<script>
import {store} from "../store.js";

export default
{
    name:"Input",
    emits:["searched"],
    data()
    {
        return{
            search:"",
            store,
        }
    },
    methods:
    {
        searchedName()
        {
            store.search = this.search
        }
    },
    computed:
    {
        
    }
}
</script>

<template>
    <input type="text" placeholder="Search..." v-model="search" @keyup="searchedName">
</template>

<style>

</style>
