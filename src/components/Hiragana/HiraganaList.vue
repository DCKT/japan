<template>
  <div class="list">
    <div class="list-item" v-for="item in state.hiragana">
      <span class="hiragana">
        {{ item[0] }}
      </span> 

      <span class="romaji">
        {{ item[1] }}
      </span>
    </div>
  </div>
</template>

<script>
import HiraganaStore from '../../stores/HiraganaStore.js';

export default {
  data () {
    return {
      state: HiraganaStore.state,
    }
  },
}
</script>

<style>
  .list {
    max-width: 531px;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: baseline;
    justify-content: space-around;
  }

  .list-item {
    padding: 0 10px;
    margin: 10px 0;
  }

  .list .hiragana {
    font-size: 40px;
  }

  .list .romaji {
    font-size: 30px;
  }
</style>