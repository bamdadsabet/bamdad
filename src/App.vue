<template>
  <body>
    <navBar />
    <!--  <div id="nav">-->
    <!--    <router-link to="/">Home</router-link> |-->
    <!--    <router-link to="/about">About</router-link>-->
    <!--  </div>-->
    <router-view/>
    <theFooter />
  </body>
</template>

<script>
  import navBar from "./components/navBar";
  import theFooter from "./components/theFooter";
  export default {
    components: {
      navBar,
      theFooter
    }
  }
</script>

<style lang="scss">
  @import "assets/Sass/colorVarailbles";
 * {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  padding: 0;
  margin: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

 body {
   background-color: $main-bg;
 }
</style>
