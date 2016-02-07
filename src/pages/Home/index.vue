<template>
  <div class="jumbotron">
    <h1>{{ $t('home.title') }} !</h1>
    <p>
      {{ $t('home.description') }}
    </p>
  </div>

  <router-view></router-view>
</template>

<script>


export default {
  data () {
    return {}
  },
}
</script>

<style>
  
</style>