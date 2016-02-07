<template>
  <div class="container" v-bind:class="formClass">

    <div v-if="end">
      <div class="row">
        <button class="btn btn-primary btn-lg" v-on:click="retry">
          {{ $t('quizz.again') }} <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
        </button>
      </div>
      <h1>{{ $t('quizz.results') }} !</h1>
      <div class="percentage">
        {{ Math.round((state.found.length * 100 / state.hiragana.length) * 100) / 100 }} %
      </div>
      <div class="error">
        {{ $t('quizz.with') }} {{ state.error }} {{ $t('quizz.error') }} {{ state.error ? 's': '' }}
      </div>
      <br>
      <div class="row">
        <div class="col-md-6">
          <div class="panel panel-success">
            <div class="panel-heading">
              <h3 class="panel-title">{{ $t('quizz.found') }}</h3>
            </div>
            <div v-for="found in state.found"  class="result">
              <span class="hiragana">{{found.hiragana}}</span>
              <span class="romaji">{{found.romaji}}</span>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="panel panel-danger">
            <div class="panel-heading">
              <h3 class="panel-title">{{ $t('quizz.notFound') }}</h3>
            </div>
            <div v-for="failed in state.failed" class="result">
              <span class="hiragana">{{failed.hiragana}}</span>
              <span class="romaji">{{failed.romaji}}</span>
            </div>
          </div>
        </div>
      </div>

      
    </div>

    <div v-else>
      <h1>{{ $t('quizz.title', { type: 'Hiragana' }) }} !</h1>
      <div>{{ state.currentQuizz }} / {{ state.hiragana.length }}</div>
      <div class="hiragana-quizz">
        {{ state.selected.hiragana }}
      </div>

      <form action="" v-on:submit.prevent="submit">
        <input type="text" class="input" v-model="romaji" maxlength="4" />
        <button type="submit" class="Form-submit">
          {{ $t('quizz.validate') }}
        </button>

        <div class="btn btn-link" v-on:click.prevent="pass">
          {{ $t('quizz.skip') }}
        </div>
      </form>

      <div class="alert alert-danger error-message">
        {{ $t('quizz.wrong') }}
      </div>

      <div class="alert alert-success valid-message">
        Good job !
      </div>
    </div>
  </div>
</template>

<script>
import HiraganaStore from '../../stores/HiraganaStore.js';

HiraganaStore.initQuizz();

export default {
  data () {
    return {
      romaji: "",
      end: false,
      formClass: {
        error: false,
        valid: false,
      },
      state: HiraganaStore.state,
    }
  },
  methods: {
    submit() {
      const isValid = HiraganaStore.check(this.romaji);

      if (isValid) {
        this.valid();
        this.end = HiraganaStore.addToFound();
      }
      else {
        this.formClass.error = true;
        setTimeout(() => {this.formClass.error = false }, 1500);
      }

      this.romaji = "";
    },
    valid() {
      this.formClass.valid = true;

      setTimeout(() => {this.formClass.valid = false }, 1500);
    },
    pass() {
      this.end = HiraganaStore.passCurrentHiragana();
    },
    retry() {
      HiraganaStore.resetQuizz();
      this.end = false;
    }
  }
}
</script>

<style>



.hiragana {
  font-weight: bold;
  font-size: 25px;
}
.hiragana-quizz {
  font-weight: bold;
  font-size: 255px;
}

.romaji {
  font-size: 18px;
}

.input {
  width: 100px;
  display: inline-block;
  height: 60px;
  font-size: 30px;
  border-radius: 5px;
  border: 2px solid #ccc;
  text-align: center;
}

.error .input {
  border-color: #e74c3c;
}

.Form-submit {
  background: #2ecc71;
  color: white;
  border: none;
  height: 55px;
  font-size: 25px;
  padding: 0 25px;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0px 4px 0 #27ae60;
  position: relative;
  top: -3px;
}

.Form-submit:hover {
  box-shadow: 0px 2px 0 #27ae60;
}

.Form-submit:focus, .Form-submit:active {
  background: #27ae60;
}

.error-message, .valid-message {
  display: none;
  margin-top: 20px;
  font-weight: bold;
}

.error .error-message {
  display: block;
}

.valid .valid-message {
  display: block;
}

.percentage {
  font-size: 5rem;
  font-weight: bold;
}
</style>
