<script>
import {store} from "../../store.js"

export default
    {
        name: "Button",
        data()
        {
            return{
                store,
            }
        },
        methods:
        {
    
        },
        mounted()
        {
            
        }
    }
</script>

<template>
    <button @click="store.callApi()">SEARCH</button>
</template>

<style scoped>
button 
{
    border-style: none;
    padding: 0.5em 1em;
    background-color: white;
    margin-right: 0.5em;
}
</style>
