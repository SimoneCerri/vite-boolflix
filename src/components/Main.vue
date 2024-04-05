<script>
import { store } from "../store.js"

export default
    {
        name: "Main",
        data() {
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
        <div v-if="store.results.length > 0" class="row">
            <div v-for="result in store.results" class="col">
                <div class="card">
                    <div class="poster">
                        <div v-if="result.poster_path != null">
                            <img :src="img_url + result.poster_path" alt="">
                        </div>
                        <div v-else>
                            <img class=" null_image" src="../../public/img/null.jpg" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <div>Title: {{ result.title || result.name }}</div>
                        <div>Original title: {{ result.original_title || result.original_name }}</div>
                        <div>Vote: {{ this.getRoundedVote(result.vote_average) }} / {{ maxVote }}</div>
                        <div class="vote">
                            <span v-for="n in (this.getRoundedVote(result.vote_average)) " class="vote_stars">
                                &starf;
                            </span>
                            <span v-for="n in ((this.maxVote) - (this.getRoundedVote(result.vote_average)))"
                                class="vote_stars">
                                &star;
                            </span>
                        </div>
                        <!-- #TO_DO: some flags still bugged even if I change codes in "country.json" -->
                        <div>Language: <span>{{ result.original_language }}</span> <span class="fi"
                                :class="('fi-') + (result.original_language)"></span>
                        </div>
                    </div>
                </div>
            </div>
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
    padding: 10em 0;
    overflow-y: scroll;
    scrollbar-width: none;
    width: 80%;
    margin: 0 auto;

    .fi {
        background-size: contain;
        background-position: 50%;
        background-repeat: no-repeat;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        .col {
            width: calc((100% / 12) * 2);
            display: flex;
            justify-content: center;
            align-items: center;

            .card {
                padding: 1em;
                position: relative;
                width: 300px;
                display: flex;
                justify-content: center;
                align-items: center;

                .poster
                {
                    img
                    {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        box-shadow: 10px 10px 10px 0px rgba(255, 115, 0, 0.100);
                    }

                    .null_image
                    {
                        width: 100%;
                        height: 100%;
                        object-fit: fill;
                        box-shadow: 10px 10px 10px 0px rgba(255, 115, 0, 0.100);
                    }
                }

                .info {
                    padding: 1em;
                    width: 80%;
                    position: absolute;
                    bottom: 5%;
                    left: 5%;
                    color: white;
                    overflow: hidden;
                    max-height: 300px;
      
                    div
                    {
                        padding: 0.25em 0;
                    }

                    .vote_stars {
                        color: gold;
                    }
                }
            }
        }
    }
}

.card 
{
    .info
    {
        display: none;
    }
}
/* THOSE 2 RULES DOESN'T WORK BEFORE IN CSS NESTING WTF !? */
.card:hover
{
    .poster
    {
        opacity: 10%;
    }

    .info
    {
        display: block;
        color: white
    }
}
</style>