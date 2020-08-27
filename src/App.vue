<template>
  <div id="app">
    <b-navbar id="navbar" variant='faded' toggleable="lg" type="light">
      <b-navbar-toggle target="collapse-area"></b-navbar-toggle>
      <b-collapse id="collapse-area" is-nav>
        <b-navbar-nav>
          <b-icon icon="list" scale="2"></b-icon>
        </b-navbar-nav>
        <b-navbar-nav class="d-none d-md-block mx-auto">
          <b-nav-text>
            <img class="navbar-logo" src="./assets/1.png" width="80" height="80">
          </b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-icon icon="search" scale="2"></b-icon>
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

</style>
