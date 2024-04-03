<script>
import {store} from "../store.js";

export default
{
    name:"Input",
    emits:["searched"],
    /* props:["searchString"], */
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
            /* this.$emit('searched', search) */
            store.search = this.search
        }
    },
    computed:
    {
        
    }
}
</script>

<template>
    <input type="text" placeholder="Search..." v-model="search" @keyup="searchedName" > <!-- @keyup="$emit('searched', search)" -->
</template>

<style>

</style>
