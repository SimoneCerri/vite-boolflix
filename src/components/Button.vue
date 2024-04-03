<script>
/* import axios from "axios"; */
import {store} from "../store.js"

export default
    {
        name: "Button",
        /* props: ["search"], */
        data()
        {
            return{
                /* ID: "25fe11ffdf5ce5a3da68cfa381752925", */
            }
        },
        methods:
        {
            /* callApi(ID,search)
            {
                console.log(this.search,this.ID);

                axios.get(`https://api.themoviedb.org/3/search/movie?query="${this.search}"&api_key="${this.ID}"`)
                    .then(response =>
                    {
                        console.log(response.data);
                    })
                    .catch(err =>
                    {
                        console.error(err.message)
                    })
            } */
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
