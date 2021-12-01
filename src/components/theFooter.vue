<template>
    <footer>
       <ul class="contact-me">
           <li>Phone: <a href="tel:+989129495183">+98 912 949 51 83</a></li>
           <li>Email: <a href="mailto:bamdadsabet@gmail.com"><address>bamdadsabet@gmail.com</address></a></li>
       </ul>
        <ul class="nav">
            <li><a href="/">Home</a></li>
            <li><a href="/search">Search</a></li>
        </ul>
        <h4>This passion project is a work in progress and not published yet</h4>
        <h5>- Just a work sample -</h5>
    </footer>
</template>

<script>
    export default {
        name: "theFooter"
    }
</script>

<style scoped lang="scss">
    @import "src/assets/Sass/colorVarailbles";
    @import "src/assets/Sass/responsiveScales";
    $gray: #6A7575;
    footer{
        background-color: black;
        padding: 80px 20vw 20px 20vw;
        @media screen and (max-width: $tablet) and (min-width: $mobile) {
            padding-right: 10vw;
            padding-left: 10vw;
        }
        @media screen and (max-width: $mobile){
            padding-right: 2vw;
            padding-left: 2vw;
        }
        ul{
            color: honeydew;
            list-style: none;
            width: 35vw;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            @media screen and (max-width: $deskTop) and (min-width: $lapTop) {
                width: 40vw;
            }
            @media screen and (max-width: $lapTop) and (min-width: $tablet) {
                width: 50vw;
            }
            @media screen and (max-width: $tablet) and (min-width: $mobile) {
                width: 80vw;
            }
            @media screen and (max-width:$mobile){
                width: 80vw;
            }
            a{
                text-decoration: none;
            }
            &.contact-me{
                margin-bottom: 50px;
                @media screen and (max-width: $tablet) and (min-width: $mobile) {
                    font-size: 15px;
                }
                @media screen and (max-width: $mobile){
                    flex-flow: column-reverse;
                    align-items: center;
                }
                li:first-of-type{
                    @media screen and (max-width: $mobile){
                        margin-top: 30px;
                    }
                }
                address{
                    display: inline-block;
                }
                a{
                    color: gray;
                }
            }
            &.nav{
                a{
                    color: $red;
                    transition: color .3s;
                    &:hover{
                        color: $blueHover;
                    }
                }
            }
        }
        h4{
            color: $gray;
            margin-top: 55px;
            text-align: center;
            font-size: 14px;
            font-weight: normal;
        }
        h5{
            color: $gray;
            margin-top: 15px;
            text-align: center;
            font-size: 12px;
        }

    }
</style>