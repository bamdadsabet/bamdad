<template>
    <div class="lds">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped lang="scss">
    .lds{
        display: inline-block;
        position: absolute;
        left: calc(50% - 50px);
        top: 10%;
        margin-top: 20%;
        width: 100px;
        height: 100px;
        div {
            display: inline-block;
            position: absolute;
            left: 8px;
            width: 16px;
            background: #fff;
            animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
            &:nth-child(1) {
                left: 8px;
                animation-delay: -0.24s;
            }
            &:nth-child(2) {
                left: 32px;
                animation-delay: -0.12s;
            }
            &:nth-child(3) {
                left: 56px;
                animation-delay: 0s;
            }
        }
    }

    @keyframes lds-facebook {
        0% {
            top: 8px;
            height: 64px;
        }
        50%, 100% {
            top: 24px;
            height: 32px;
        }
    }

</style>