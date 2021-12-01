<template>
    <ul id="navBar" class="in-slider">
        <li>
            <a href="#">Logo</a>
        </li>
        <li>
            <a href="#">SignUp / SignIn</a>
            <a href="/">Home</a>
            <a href="/search">Search</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "navBar",
        data() {
            return {
                scroll: 0,
            }
        },
        methods:{
            scrolling() {
                this.scroll = window.pageYOffset
            }
        },
        watch: {
            scroll(newScrollAmount, oldScrollAmount){
                let navBar = document.querySelector('ul#navBar');
                 if (newScrollAmount === 0){
                     navBar.className = 'in-slider'
                 }
                 else if (newScrollAmount > oldScrollAmount){
                     navBar.className = 'scroll-down';
                 }
                 else if (newScrollAmount < oldScrollAmount){
                     navBar.className = 'scroll-up';
                 }
            }
        },
        mounted() {
            document.addEventListener('scroll', this.scrolling)
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/Sass/colorVarailbles";
    .scroll-down {
        transform: translate3d(0, -100%, 0);
    }
    .scroll-up {
        filter: drop-shadow(0 -10px 20px rgb(200, 200, 500));
        background-color: rgb(14, 14, 14);
    }
    .in-slider{
        background-color: transparent;
    }
    ul{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9999;
        height: 80px;
        display: flex;
        justify-content: space-between;
        flex-flow: row-reverse;
        transition: all 300ms ease-in-out;
        background-color: transparent;

        li{
            display: flex;
            justify-content: space-around;
            flex-flow: row;
            list-style: none;
            line-height: 70px;
            padding-top: 0;
            padding-right:6vw;
            padding-left:2vw;
            a{
                text-decoration: none;
                color: honeydew;
                margin: 0 1.5vw;
                transition: color .2s;
                &:hover{
                    color: $blueHover;
                }
            }
        }
    }
</style>