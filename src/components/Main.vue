<script>
import {store} from "../store.js"

export default
{
    name:"Main",
    data()
    {
        return {
            store,
            img_url: "https://image.tmdb.org/t/p/w342",
            markup: "<i class='fa-solid fa-star' style='color: #fbff00;''></i>",
            maxVote: 5,
        }
    },
    methods:
    {
        getRoundedVote(vote) {
            return Math.ceil((vote.toFixed(1)) / 2)
        },
    }
}
</script>

<template>
    <div id="main">
        <div v-if="store.results.length > 0">
            <ul v-for="result in store.results">
                <br>
                <li>Title: {{ result.title || result.name }}</li>
                <li>Original title: {{ result.original_title || result.original_name }}</li>
                <li>Vote: {{ this.getRoundedVote(result.vote_average) }} / {{ maxVote }}</li>
                <div class="vote">
                    <span v-for="n in (this.getRoundedVote(result.vote_average)) " class="vote_stars">
                        &starf;
                    </span>
                    <span v-for="n in ((this.maxVote) - (this.getRoundedVote(result.vote_average)))" class="vote_stars">
                        &star;
                    </span>
                </div>
                <li>Language: <span class="fi" :class="('fi-') + (result.original_language)"></span></li>
                <!-- #TO_DO: some flags still bugged even if I change codes in "country.json" -->
                <li v-if="result.poster_path != null"><img :src="img_url + result.poster_path" alt=""></li>
                <li v-else><img class="null_image" src="../../public/img/null.webp" alt=""></li>
                <li>{{ }}</li>
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
    </div>
</template>

<style scoped>
#main {
    height: calc(100vh - 120px);
    padding-top: 5em;
    overflow-y: scroll;

    .fi {
        background-size: contain;
        background-position: 50%;
        background-repeat: no-repeat;
    }

    .null_image {
        max-width: 342px;
        height: 513px;
        object-fit: cover;
    }

    .vote_stars {
        color: gold;
    }
}
</style>