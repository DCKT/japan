import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import App from './App.vue';
import Index from './pages/Home/index.vue';

import HiraganaStore from './stores/HiraganaStore.js';
import HiraganaList from './pages/Hiragana/list.vue';
import HiraganaQuizz from './pages/Hiragana/quizz.vue';
import HiraganaIndex from './pages/Hiragana/index.vue';

import KatakanaList from './pages/Katakana/list.vue';
import KatakanaQuizz from './pages/Katakana/quizz.vue';
import KatakanaIndex from './pages/Katakana/index.vue';

import locales from './locales.js';

Vue.use(VueI18n, {
  lang: navigator.language,
  locales,
});

Vue.use(VueRouter);

document.title = Vue.t('document.title');

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
  },
  '/katakana': {
    component: KatakanaIndex,

    subRoutes: {
      '/list': {
        component: KatakanaList,
      },
      '/quizz': {
        component: KatakanaQuizz,
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