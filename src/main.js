import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Index from './components/Index.vue';

import HiraganaStore from './stores/HiraganaStore.js';
import HiraganaList from './components/Hiragana/HiraganaList.vue';
import HiraganaQuizz from './components/Hiragana/HiraganaQuizz.vue';
import HiraganaIndex from './components/Hiragana/HiraganaIndex.vue';

Vue.use(VueRouter);

var router = new VueRouter();

router.map({
  '/': {
    component: Index,
  },
  '/hiragana': {
    component: HiraganaIndex,

    subRoutes: {
      '/list': {
        component: HiraganaList,
      },
      '/quizz': {
        component: HiraganaQuizz,
      }
    }
  }
});

router.beforeEach(transition => {

  if (transition.to.path === '/hiragana/quizz') {
    HiraganaStore.resetQuizz();
  }

  transition.next();
});

router.start(App, '#app');