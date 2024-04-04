<script>
import Input from "./components/Input.vue";
import Button from "./components/Button.vue";
import { store } from "./store.js"
import axios from "axios";


export default
    {
        name: "App",
        components:
        {
            Button,
            Input,
        },
        data() {
            return {
                store,
                /* img_url: "https://image.tmdb.org/t/p/w92",
                resultsPosters:"", */
            }
        },
        methods:
        {
            /* callImageApi()
            {
                axios.get(img_url+result.poster_path)
                .then(response => 
                {
                    this.resultsPosters = response
                })
            } */
        },
        computed:
        {
            /* getImage : function()
            {
                return this.img_url + this.poster_path

            } */
        }
    }
</script>

<template>
    <span>Search a film here and click "SEARCH" or just press "enter" after digit: </span>
    <Input /> <Button />
    <div v-if="store.results.length > 0">
        <ul v-for="result in store.results">
            <br>
            <li>Title: {{ result.title || result.name }}</li>
            <li>Original title: {{ result.original_title || result.original_name }}</li>
            <li>Vote: {{ (result.vote_average).toFixed(1) }}</li>
            <li>Language: <span class="fi" :class="('fi-') + (result.original_language)"></span></li>
            <!-- #TO_DO: some flags still bugged even if I change codes in "country.json" -->
            <!-- <li>{{img_url}}{{ result.poster_path }}</li> -->
            <br>
        </ul>
    </div>
    <div v-if="store.noResultsErrFilm">
        <span>
            No films found...
        </span>
    </div>
    <div v-if="store.noResultsErrTv">
        <span>
            No TV shows found...
        </span>
    </div>
</template>

<style>
.fi {
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
}
</style>
