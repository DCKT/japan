<template>
  <div class="jumbotron">
    <h1>{{ $t('home.title') }} !</h1>
    <p>
      {{ $t('home.description') }}
    </p>
  </div>
  
  <div class="page-header">
    <h2>{{ $t('home.usefulLinks') }}</h2>
  </div>
  
  <div class="col-md-5">
    <strong>
      FR
    </strong>
    <ul class="list-group">
      <li class="list-group-item">
        <a href="https://www.youtube.com/channel/UChFfLNTK64xQj7NscGmLLLg" target="_blank">
          Cours de Japonais gratuit
        </a>
        par Julien Fontanier
      </li>
      <li class="list-group-item">
        <a href="http://www.kanpai.fr/" target="_blank">
          Kanpai, Voyage et culture au Japon
        </a>
      </li>
    </ul>
  </div>
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