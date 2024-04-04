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
                hover:false,
            }
        },
        methods:
        {
            getRoundedVote(vote) {
                return Math.ceil((vote.toFixed(1)) / 2)
            },
            showInfos()
            {
                this.hover = !this.hover;
                console.log(this.hover);
            }
        }
    }
</script>

<template>
    <div id="main">
        <div v-if="store.results.length > 0" class="row">
            <div v-for="result in store.results" class="col">
                <div class="card">
                    <!-- #TO_DO: some flags still bugged even if I change codes in "country.json" -->
                    <div class="poster">
                        <div v-if="result.poster_path != null"><img :class="hover" :src="img_url + result.poster_path"
                                alt="" @mouseover="showInfos()" @mouseleave="showInfos()"></div>
                        <div v-else><img class=" null_image" src="../../public/img/null.webp" alt=""></div>
                    </div>
                    <div v-if="this.hover" class="info">
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
                        <div>Language: <span class="fi" :class="('fi-') + (result.original_language)"></span></div>
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
            width: calc((100% / 12) * 3);

            .card {
                padding: 1em;
                position: relative;
                
                .poster
                {
                    img
                    {
                        width: 100%;
                        height: 100%;
                        max-height: 450px;
                        object-fit: cover ;
                    }
                }

                .info {
                    padding: 0.5em;
                    width: 80%;
                    position: absolute;
                    bottom: 5%;
                    left: 5%;
                    color: white;

                    .vote_stars
                    {
                        color: gold;
                    }
                }
            }
        }
    }
}

.hover
{
    background-color: #333;
    opacity: 50%;
}
</style>