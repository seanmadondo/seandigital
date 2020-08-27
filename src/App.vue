<template>
  <div id="app" class="application">
    <b-navbar id="navbar" toggleable="lg" type="light">
      <b-navbar-brand>
            <router-link :to="{ name: 'home' }"> <img class="navbar-logo" src="./assets/1.png" width="70" height="70"></router-link>
      </b-navbar-brand>

      <b-navbar-brand class="mr-auto">
        <router-link :to="{ name: 'home' }"> <img class="navbar-logo" src="./assets/2.png" width="160" height="70"> </router-link>
      </b-navbar-brand>

      <b-icon> </b-icon>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Services" right>
            <b-dropdown-item href="#">Music Production</b-dropdown-item>
            <b-dropdown-item href="#">Software Development</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav >
          <b-nav-text> About </b-nav-text>
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

.application {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

</style>
