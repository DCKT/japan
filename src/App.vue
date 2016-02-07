<template>
  <div id="app" class="container">
    <app-navigation></app-navigation>

    <router-view></router-view>
  </div>
</template>

<script>
import AppNavigation from './components/Navigation.vue';

export default {
  data () {
    return {}
  },
  components: { AppNavigation }
}
</script>

<style>
  * { box-sizing: border-box; outline: none;}

  body {
    font-family: Helvetica, sans-serif;
    color: #242424;
  }
  .container {
    max-width: 960px;
    margin: auto;
    text-align: center;
  }
</style>
