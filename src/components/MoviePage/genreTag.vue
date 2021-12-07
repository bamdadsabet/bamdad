<template v-if="genre">
    <span>{{genre}}</span>
</template>

<script>
    export default {
        name: "genreTag",
        props:{
            genre: Array
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/Sass/colorVarailbles";
    span {
        background-color: $red;
        color: #FFFFFF;
        padding: 8px 15px;
        font-size: 11px;
        border-radius: 4px;
        margin: 0 3px;
        height: 12px;
    }
</style>