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
            }
        }
    }
</script>

<template>
    <Input /> <Button />
    <div v-if="store.results.length > 0">
        <ul v-for="result in store.results">
            <br>
            <li>Title: {{ result.title }}</li>
            <li>Original title: {{ result.original_title }}</li>
            <li>Language: {{ result.original_language }}</li>
            <li>Vote: {{ result.vote_average }}</li>
            <br>
        </ul>
    </div>

</template>

<style></style>
