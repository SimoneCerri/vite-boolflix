<script>
import Button from "./HeaderComponents/Button.vue"
import Input from "./HeaderComponents/Input.vue"
import Logo from "./HeaderComponents/Logo.vue"

export default {
    components:
    {
        Button,
        Input,
        Logo,
    }
    
}
</script>

<template>
    <div id="header">
        <div>
            <Logo/>
        </div>
        <div>
            <Input/><Button/>
        </div>  
    </div> 
</template>

<style scoped>
#header
{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: black;
    z-index: 9999;
    position: fixed;
    width: 100%;
}   
</style>