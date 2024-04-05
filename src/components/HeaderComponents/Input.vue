<script>
import { store } from "../../store.js";

export default
    {
        name: "Input",
        emits: ["searched"],
        data() {
            return {
                search: "",
                store,
            }
        },
        methods:
        {
            searchedName() {
                store.search = this.search
            }
        },
        computed:
        {

        }
    }
</script>

<template>
    <input class="bar" type="text" placeholder="Search..." v-model="search" @keyup="searchedName"
        @keyup.enter="searchedName; store.callApi()">
</template>

<style scoped>
input {
    border-style: none;
    padding: 0.5em 1em;
    margin-right: 0.25em;
    color: orange
}

input:focus {
    outline: none;
}

input::placeholder {
    color: orange;
}

.bar {
    @media screen and (max-width: 768px) {
        /* iPads & Tablets */
        width: 60%;
    }

    @media screen and (max-width: 480px) {
        /* iPads & Tablets */
        width: 90%;
    }
}
</style>
