<script>
import axios from "axios";

export default
    {
        name: "Button",
        props: ["search"],
        methods:
        {
            callApi() {
                axios.get("https://api.themoviedb.org/3/search/movie?query&api_key=25fe11ffdf5ce5a3da68cfa381752925")
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(err => {
                        console.error(err.message) //log in console the error (if there are errors) just in case
                    })
            }
        }
    }
</script>

<template>
    <button @click="callApi()">SEARCH</button>
</template>

<style></style>
