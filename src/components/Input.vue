<script>
export default
{
    name:"Input",
    emits:["searched"],
    /* props:["searchString"], */
    data()
    {
        return{
            search:"",
        }
    },
    methods:
    {
        searchedName()
        {
            this.$emit('searched', search)
        }
    },
    computed:
    {
        
    }
}
</script>

<template>
    <input type="text" placeholder="Search..." v-model="search" @keyup="searchedName" > <!-- @keyup="$emit('searched', search)" -->
</template>

<style>

</style>
