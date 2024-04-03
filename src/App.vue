<script>
import Input from "./components/Input.vue";
import Button from "./components/Button.vue";
import {store} from "./store.js"


export default
    {
        name: "App",
        components:
        {
            Button,
            Input,
        },
        data()
        {
            return{
                store,
            }
        }
    }
</script>

<template>
    <Input/> <Button/>
    <ul v-if="store.results.length > 0">
        <li v-for="result in store.results">

        </li>
    </ul>
</template>

<style></style>
