<script>
import Input from "./components/Input.vue";
import Button from "./components/Button.vue";
import { store } from "./store.js"
import { pushScopeId } from "vue";

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
                img_url: "https://image.tmdb.org/t/p/w92",
                markup: "<i class='fa-solid fa-star' style='color: #fbff00;''></i>",
            }
        },
        methods:
        {
            getRoundedVote(vote) {
                return Math.ceil((vote.toFixed(1)) / 2)
            },
        },
        computed:
        {

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
            <li>Vote: {{ this.getRoundedVote(result.vote_average) }}</li>
            <div class="vote">
                <span v-for="n in (this.getRoundedVote(result.vote_average)) " class="vote_stars">
                    &starf;
                </span>
                <span v-for="n in (5 - this.getRoundedVote(result.vote_average))">
                    &star;
                </span>
            </div>
            <!-- <li><i class="fa-solid fa-star" style="color: #fbff00;"></i></li> -->
            <li>Language: <span class="fi" :class="('fi-') + (result.original_language)"></span></li>
            <!-- #TO_DO: some flags still bugged even if I change codes in "country.json" -->
            <li v-if="result.poster_path != null"><img :src="img_url + result.poster_path" alt=""></li>
            <li v-else><img class="null_image" src="../public/img/null.webp" alt=""></li>
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

.null_image {
    max-width: 92px;
    height: 130px;
    object-fit: cover;
}

.vote_stars
{
    
}

.vote 
{
    display: flex;
}
</style>
