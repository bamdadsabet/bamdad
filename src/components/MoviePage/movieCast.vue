<template>
       <div>
           <ul>
               <li v-for="(casts, role) in data?.movieCast" :key="role">
                   <template v-if="casts">
                       <span>{{role}}:</span>
                       <a
                               v-for="(castMember, index) in casts"
                               :key="index"
                               :href="wikipediaUrl(castMember)"
                               target="_blank"
                       >
                           {{castMember}}
                       </a>
                   </template>
               </li>
           </ul>
           <ul v-if="data.accomplishments" :class="{one: oneLiner}">
               <li v-for="(accomplishment, accomplishmentType) in data.accomplishments" :key="accomplishmentType">
                   <template v-if="accomplishment">
                       <span>{{accomplishmentType}}:</span>
                       <h4 :class="accomplishmentType">{{accomplishment}}</h4>
                   </template>
               </li>
           </ul>
       </div>
</template>

<script>
    export default {
        name: "movieCast",
        props:{
            data: Object
        },
        methods:{
            wikipediaUrl(name){
                name = name.trim().replace(' ', '_');
                return `https://en.wikipedia.org/wiki/${name}`
            },
        },
        computed:{
            oneLiner(){
                let values = Object.values(this.$props.data.accomplishments);
                for (let i of values){
                    return i === undefined;
                }
                return false;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/Sass/colorVarailbles";
    @import "src/assets/Sass/responsiveScales";
    div{
        display: flex;
        width: 70%;
        margin-top: 40px;
        @media screen and (max-width: $deskTop + 100px){
            width: 100%;
        }
        @media screen and (max-width: 940px){
            flex-flow: column;
            margin-top: 80px;
            margin-bottom: 40px;

        }
        ul{
            list-style: none;
            justify-content: space-between;
            width: 45vw;
            padding-left: 2.5vw;
            @media screen and (max-width: 940px){
                width: 90vw;
            }
            &:last-of-type{
                margin: auto 0;
                .one{
                    margin: 0 0;
                }
            }
            li{
                margin-bottom: 15px;
                @media screen and (max-width: 940px) and (min-width: $mobile){
                    margin-bottom: 40px;
                }
                @media screen and (max-width: $mobile){
                    margin-bottom: 10px;
                }
                span{
                    font-size: 18px;
                    color: $red;
                    padding-right: 20px;
                    @media screen and (max-width: $mobile){
                        font-size: 16px;
                        padding-right: 10px;
                        line-height: 50px;
                    }
                }
                a{
                    color: honeydew;
                    text-decoration: none;
                    font-size: 14px;
                    transition: color .2s;
                    padding-right: 15px;
                    @media screen and (max-width: 940px){
                        font-size: 16px;
                    }
                    @media screen and (max-width: 940px) and (min-width: $mobile){
                        font-size: 16px;
                        padding-right: 15px;
                    }
                    @media screen and (max-width: $mobile){
                        font-size: 14px;
                        padding-right: 10px;
                    }
                    &:hover{
                            color: $blueHover;
                    }
                }
                h4{
                    display: inline-block;
                    font-size: 14px;
                    &.BoxOffice{
                        color: #3E9C35;
                        @media screen and (max-width: 940px){
                            font-size: 18px;
                        }
                    }
                    &.Awards{
                        color: silver;
                        text-align: center;
                        @media screen and (max-width: 940px) and (min-width: $mobile){
                            font-size: 16px;
                        }
                        @media screen and (max-width: $mobile){
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
</style>