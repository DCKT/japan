<template>
  <div class="list">
    <div class="legend">
      <span class="label label-primary">Dakuten</span>
      <span class="label label-info">Handakuten</span>
      <button class="btn btn-default" v-on:click="toggleDakuten">
        {{ showDakuten ? $t('list.hide') : $t('list.show') }}
      </button>
    </div>
    <template v-for="item in state.hiragana">
      <div class="list-item">
        <span class="hiragana">
          {{ item[0] }}
        </span> 

        <span class="romaji">
          {{ item[1] }}
        </span>

        <div class="dakuten" v-if="state.dakuten[item[1]] && showDakuten">
          <span class="hiragana">
            {{ state.dakuten[item[1]][0] }}
          </span> 

          <span class="romaji">
            {{ state.dakuten[item[1]][1] }}
          </span>
        </div>

        <div class="handakuten" v-if="state.handakuten[item[1]] && showDakuten">
          <span class="hiragana">
            {{ state.handakuten[item[1]][0] }}
          </span> 

          <span class="romaji">
            {{ state.handakuten[item[1]][1] }}
          </span>
        </div>
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
      showDakuten: true,
    }
  },
  methods: {
    toggleDakuten() {
      this.showDakuten = !this.showDakuten;
    }
  }
}
</script>

<style>
  .legend {
    font-size: 1.24em;
  }
  .dakuten {
    color: #337ab7;
  }

  .handakuten {
    color: #5bc0de;
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