<script>
export default
{
    name: "Footer",
}
</script>

<template>
    <div id="footer">
        <div class="left_footer">SX</div>
        <div class="right_footer">DX</div>
    </div>
</template>

<style scoped>
#footer {
    background-color: black;
    height: 120px;
    display: flex;
    align-items: center;
    text-align: center;
    
    .left_footer
    {
        flex-basis: 50%;
    }

    .right_footer 
    {
        flex-basis: 50%;
    }
}
</style>