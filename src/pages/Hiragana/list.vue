<template>
  <div class="list">
    <template v-for="item in state.hiragana">
      <div class="list-item">
        <span class="hiragana">
          {{ item[0] }}
        </span> 

        <span class="romaji">
          {{ item[1] }}
        </span>
      </div>

      <br v-if="$index % 5 == 4 && item[1] != 'ri' || item[1] == 'yo' || item[1] == 'ro' ">
    </template>
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
  }

  .list-item {
    padding: 0 10px;
    margin: 10px 0;display: inline-block;
  }

  .list .hiragana {
    font-size: 40px;
  }

  .list .romaji {
    font-size: 30px;
  }
</style>