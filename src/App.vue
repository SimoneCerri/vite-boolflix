<script>
import Input from "./components/Input.vue";
import Button from "./components/Button.vue";
import { store } from "./store.js"


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
                flag:"fi-",
            }
        }
    }
</script>

<template>
    <span>Search a film here and click "SEARCH" or just press enter: </span>
    <Input /> <Button />
    <div v-if="store.results.length > 0">
        <ul v-for="result in store.results">
            <br>
            <li>Title: {{ result.title }}</li>
            <li>Original title: {{ result.original_title }}</li>
            <li>Language: {{ result.original_language }}</li>
            <li>Vote: {{ result.vote_average }}</li>
            <li><span :class="{flag+result.original_language}">LOL</span></li>
            <!-- <li>{{ result.original_language }}</li> -->
            <!-- <li class="fi-it"></li> -->
            <br>
        </ul>
    </div>
    <!-- <span class="fi fi-gr"></span> <span class="fi fi-gr fis"></span> -->

</template>

<style></style>
