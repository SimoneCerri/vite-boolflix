<script>
import {store} from "../store.js"

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

<style></style>
