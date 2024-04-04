<script>
import {store} from "../../store.js";

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
    <input type="text" placeholder="Search..." v-model="search" @keyup="searchedName" @keyup.enter="searchedName;store.callApi()">
</template>

<style scoped>
input 
{
    border-style: none;
    padding: 0.5em 1em;
    margin-right: 0.25em;
}

input:focus
{
    outline: none;
}
</style>
