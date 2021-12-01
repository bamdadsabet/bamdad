<template>
    <div id="slider">
        <video autoplay muted loop :key="videoIndex">
            <source :src="url">
            Your browser does not support the video tag.
        </video>
    </div>
    <div class="slider-layer">
        <div class="button-container">
            <svg viewBox="0 0 60 60" fill="#fff" @click="changeVideo(-1)">
                <circle cx="30" cy="30" r="30"></circle>
                <path d="M27.1 20.5c-.7-.7-1.9-.7-2.6 0s-.7 1.9 0 2.6l7.1 7.1-7.1 7.1c-.7.7-.7 1.9 0 2.6.4.4.8.5 1.3.5s.9-.2 1.3-.5l8.4-8.4c.3-.3.5-.8.5-1.3s-.2-.9-.5-1.3l-8.4-8.4z"></path>
            </svg>
            <svg viewBox="0 0 60 60" fill="#fff" @click="changeVideo(1)">
                <circle cx="30" cy="30" r="30" ></circle>
                <path d="M27.1 20.5c-.7-.7-1.9-.7-2.6 0s-.7 1.9 0 2.6l7.1 7.1-7.1 7.1c-.7.7-.7 1.9 0 2.6.4.4.8.5 1.3.5s.9-.2 1.3-.5l8.4-8.4c.3-.3.5-.8.5-1.3s-.2-.9-.5-1.3l-8.4-8.4z"></path>
            </svg>
        </div>
<!--        <section>-->
<!--            <h1>Welcome to the greatest app <br> My movie app</h1>-->
<!--            <div>-->
<!--                <a href="#">Read more</a>-->
<!--            </div>-->
<!--        </section>-->
    </div>
</template>

<script>
    export default {
        name: "slider",
        data(){
            return {
                videoUrls:[
                    'https://static.namava.ir/Content/Upload/Images/0a4d648f-8a15-46ad-8ed9-ff6293f1af31.mp4',
                    'https://static.namava.ir/Content/Upload/Images/cf127cc2-00cf-49e6-a360-d63573841e60.mp4',
                    'https://static.namava.ir/Content/Upload/Images/88532db8-bb25-4cdf-9b59-043bbf34efce.mp4',
                    'https://static.namava.ir/Content/Upload/Images/3785f759-8a47-427b-a1a7-231f2d2b79b4.mp4'
                ],
                videoIndex: 0
            }
        },
        computed:{
          url(){
              return this.videoUrls[this.videoIndex];
          }
        },
        methods:{
            changeVideo(point){
                this.videoIndex += point;
                if (this.videoIndex > this.videoUrls.length - 1) this.videoIndex = this.videoUrls.length -1;
                else if (this.videoIndex < 0) this.videoIndex = 0;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/Sass/responsiveScales";
    @mixin responsiveHeight($unit){
        @if $unit == '%'{
            $unit: 1%;
        }
        @else if $unit == 'vh'{
            $unit: 1vh;
        }
        height: 100vh;
        @media screen and (max-width: $deskTop) and (min-width: $lapTop){
            height: 98 * $unit;
        }
        @media screen and (max-width: $lapTop) and (min-width: $tablet){
            height: 90 * $unit;
        }
        @media screen and (max-width: $tablet) and (min-width: $mobile){
            height: 80 * $unit;
        }
        @media screen and (max-width: $mobile){
            height: 60 * $unit;
        }
    }
    div#slider{
        background: #222222;
        @include responsiveHeight('vh');
        video{
            top: 0;
            left: 0;
            right: 0;
            z-index: 0;
            position: absolute;
            object-fit: fill;
            width: 100%;
            @include responsiveHeight('%');
        }
    }
    section{
        width: fit-content;
        position: absolute;
        left: 5vw;
        bottom: 18.03125vw;
        h1{
            color: #FFFFFF;
            font-weight: normal;
            font-size: 40px;
            text-align: center;
            margin-bottom: 50px;
        }
        div{
            display: flex;
            justify-content: space-around;
            a{
                text-decoration: none;
                color: honeydew;
                border: honeydew solid 2px;
                padding: 10px 25px;
                display: inline-block;
                transition: all .3s;
                &:hover{
                    transform: scale(1.2);
                }
            }
            span{
                color: honeydew;

            }
        }
    }
    div.slider-layer {
        background-color: rgba(55, 56, 62, 0.4);
        z-index: 1;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        @include responsiveHeight('%');
        div.button-container{
            width: 100px;
            display: flex;
            justify-content: space-between;
            position: absolute;
            right: 5vw;
            bottom: 7.03125vh;
            @media screen and (max-width: $deskTop) and (min-width: $lapTop){
                right: 5vw;
                bottom: 7.03125vh;
            }
            @media screen and (max-width: $lapTop) and (min-width: $tablet){
                right: calc(50vw - 50px);
                bottom: 15vh;
            }
            @media screen and (max-width: $tablet){
                right: calc(50vw - 60px);
                width: 120px;
            }
            @media screen and (max-width: $tablet) and (min-width: $mobile){
                bottom: 25vh;
            }
            @media screen and (max-width: $mobile){
                bottom: 45vh;
            }
            svg{
                width: 40px;
                height: 40px;
                @media screen and (max-width: $tablet) and (min-width: $mobile){
                    width: 45px;
                    height: 45px;
                }
                border-radius: 50%;
                outline: none;
                border: none;
                background-color: rgba(55,56,62,0.7);
                color: honeydew;
                cursor: pointer;
                &:first-of-type{
                    transform: rotate(180deg);
                }
                circle{
                    opacity: .1;
                }
                path{
                    opacity: .3;
                    transition: all .2s;
                }
                &:hover path{
                    opacity: 1;
                }
            }
        }
    }
</style>