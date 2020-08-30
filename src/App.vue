<template>
  <div id="app" class="application">
    <b-navbar id="navbar" toggleable="lg" type="light" variant="light" fixed="top" class="animate__animated animate__fadeInDown">
      <b-navbar-brand>
            <router-link :to="{ name: 'home' }"> <img class="navbar-logo" src="./assets/1.png" width="70" height="70"></router-link>
      </b-navbar-brand>

      <b-navbar-brand class="mr-auto">
        <router-link :to="{ name: 'home' }"><img class="navbar-logo" src="./assets/2.png" width="160" height="70"></router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-5">
          <b-nav-text>My Services</b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav class="ml-5">
          <b-nav-text>My Work</b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav class="ml-5">
          <b-nav-text >Who is this Sean guy?</b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav class="ml-5">
          <b-nav-text>Studio</b-nav-text>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data () {
    return {
    }
  }
}
</script>

<style>

body, html{
  overflow: scroll;
  background-color: white;
  scroll-behavior: smooth;
}

hr.long {
  border-top: 1px solid #ff1616;
  /*width:10%*/
}



/*.application {*/
/*  margin-left: auto;*/
/*  margin-right: auto;*/
/*  text-align: center;*/
/*}*/

</style>
