<template>
    <div>
        <section>
            <section>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dignissimos exercitationem hic laboriosam obcaecati officiis? Fugit, nobis, tenetur. Blanditiis eos impedit reprehenderit sunt. Obcaecati perferendis saepe sequi soluta voluptatibus voluptatum.</p>
            </section>
            <div>
                <video  autoplay="" playsinline="" muted="" loop=""><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"></video>
                <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" data-uia="our-story-card-img">
            </div>
        </section>
        <section>
            <section>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dignissimos exercitationem hic laboriosam obcaecati officiis? Fugit, nobis, tenetur. Blanditiis eos impedit reprehenderit sunt. Obcaecati perferendis saepe sequi soluta voluptatibus voluptatum.</p>
            </section>
            <div>
                <video class="our-story-card-video" autoplay playsinline muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"></video>
                <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img">
            </div>
        </section>
        <section>
            <section>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dignissimos exercitationem hic laboriosam obcaecati officiis? Fugit, nobis, tenetur. Blanditiis eos impedit reprehenderit sunt. Obcaecati perferendis saepe sequi soluta voluptatibus voluptatum.</p>
            </section>
            <div>
                <video autoplay muted loop>
                    <source src="https://static.namava.ir/Content/Upload/Images/0a4d648f-8a15-46ad-8ed9-ff6293f1af31.mp4">
                </video>
                <img src="https://www.apple.com//v/iphone-13-pro/c/images/overview/camera/photographic-styles/customize_camera_hw__bgxgvyqrcgvm_large.png" alt="">
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "theStory"
    }
</script>

<style scoped lang="scss">
    @import "src/assets/Sass/responsiveScales";
    div{
        background-color: #000000;
        position: relative;
        section{
            display: flex;
            padding: 50px 6vw 0 6vw;
            @media screen and (max-width: $deskTop) and (min-width: $lapTop) {
                padding: 50px 1vw 0 1vw;
            }
            div{
                @media screen and (max-width: $lapTop) {
                    display: flex;
                    justify-content: center;
                }
                video{
                    display: inline-block;
                    position: absolute;
                    z-index: 0;
                }
                img{
                    position: relative;
                    z-index: 1;
                }
            }
            section{
                display: inline-block;
                color: honeydew;
                height: fit-content;
                padding: 45px;
                margin-top: 100px;
                h1{
                    text-align: center;
                    margin-bottom: 20px;
                    font-size: 3.125rem;
                    @media screen and (max-width: $tablet){
                        font-size: 2.425rem;
                    }
                }
                p{
                    font-size: 1.125rem;
                    line-height: 30px;
                    @media screen and (max-width: $deskTop){
                        text-align: center;
                    }
                    @media screen and (max-width: $tablet){
                        font-size: .955rem;
                    }
                }
            }
            &:first-of-type{
                @media screen and (max-width: $lapTop){
                    flex-flow: column;
                }
                img{
                    @media screen and (max-width: $tablet) and (min-width: $mobile) {
                        width: 490px;
                    }
                    @media screen and (max-width: $mobile) {
                        width: 320px;
                    }
                }
                video{
                    height: 250px;
                    width: 410px;
                    top: 40px;
                    left: 110px;
                    @media screen and (max-width: $lapTop) and (min-width: $tablet) {
                        top: calc(50% - 202px);
                        left: calc(50% - 205px);
                    }
                    @media screen and (max-width: $tablet) and (min-width: $mobile) {
                        width: 310px;
                        top: calc(50% - 190px);
                        left: calc(50% - 155px);
                    }
                    @media screen and (max-width: $mobile) {
                        width: 195px;
                        top: calc(50% - 170px);
                        left: calc(50% - 100px);
                    }
                }
                p{
                    @media screen and (max-width: $lapTop) {
                        margin-bottom: 30px;
                    }
                }
            }
            &:nth-of-type(2){
                flex-direction: row-reverse;
                padding-top: 100px;
                @media screen and (max-width: $lapTop) {
                    flex-flow: column;
                }
                img{
                    @media screen and (max-width: $tablet) and (min-width: $mobile) {
                        width: 450px;
                    }
                    @media screen and (max-width: $mobile) {
                        width: 300px;
                    }
                }
                video{
                    height: fit-content;
                    width: fit-content;
                    top: 100px;
                    left: 85px;
                    @media screen and (max-width: $lapTop) and (min-width: $tablet){
                        top: calc(50% - 150px);
                        left: calc(50% - 235px);
                    }
                    @media screen and (max-width: $tablet) and (min-width: $mobile) {
                        width: 350px;
                        top: calc(50% - 100px);
                        left: calc(50% - 165px);
                    }
                    @media screen and (max-width: $mobile) {
                        width: 250px;
                        top: calc(50% - 80px);
                        left: calc(50% - 110px);
                    }
                }
            }
            &:last-of-type{
                padding: 0;
                flex-flow: column-reverse;
                section{
                    margin-top: 0;
                    padding: 0 20vw 180px 20vw;
                    text-align: center;
                    @media screen and (max-width: $tablet){
                        padding: 0 5vw 180px 5vw;
                    }
                }
                div{
                    margin: 0 auto;
                    height: 750px;
                    @media screen and (max-width: $tablet) and (min-width: $mobile){
                        height: 460px;
                    }
                    @media screen and (max-width: $mobile){
                        height: 280px;
                    }
                    img{
                        transform: rotate(-90deg);
                        @media screen and (max-width: $lapTop) and (min-width: $tablet){
                            height: 680px;
                        }
                        @media screen and (max-width: $tablet) and (min-width: $mobile){
                            height: 460px;
                        }
                        @media screen and (max-width: $mobile){
                            height: 300px;
                        }
                    }
                    video{
                        height: 800px;
                        width: 835px;
                        top: 40px;
                        left: -201px;
                        @media screen and (max-width: $lapTop) and (min-width: $tablet){
                            height: 302px;
                            width: 740px;
                            top: calc(50% - 185px);
                            left: calc(50% - 370px);
                        }
                        @media screen and (max-width: $tablet) and (min-width: $mobile){
                            height: 204px;
                            width: 440px;
                            top: calc(50% - 100px);
                            left: calc(50% - 220px);
                        }
                        @media screen and (max-width: $mobile){
                            height: 133px;
                            width: 300px;
                            top: calc(50% - 55px);
                            left: calc(50% - 150px);
                        }
                    }
                }
            }
        }
    }
</style>