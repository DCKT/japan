<template>
  <div id="app" class="container" v-bind:class="formClass">
    <h1>Devine le hiragana !</h1>
    <div class="hiragana">
      {{ state.selected.hiragana }}
    </div>

    <form action="" v-on:submit.prevent="submit">
      <input type="text" class="input" v-model="romaji" maxlength="4" />
      <button type="submit" class="Form-submit">
        Valider
      </button>
    </form>

    <div class="error-message">
      Faux ! Essayes encore :)
    </div>

    <div class="valid-message">
      Good job !
    </div>

    <!-- <ul>
      <li v-for="romaji in hiragana">
        <span class="hiragana">
          {{ $key }}
        </span> 
        : 
        <span class="romaji">
          {{ romaji }}
        </span>
      </li>
    </ul> -->
  </div>
</template>

<script>
import HiraganaStore from './stores/HiraganaStore.js';

HiraganaStore.pickRandomHiragana();

export default {
  data () {
    return {
      romaji: "",
      formClass: {
        error: false,
        valid: false,
      },
      state: HiraganaStore.state,
    }
  },
  methods: {
    submit() {
      if (this.romaji != this.state.selected.romaji) {
        this.formClass.error = true;
      }
      else {
        HiraganaStore.pickRandomHiragana();
        this.valid();
      }

      this.romaji = "";
    },
    valid() {
      this.formClass.valid = true;

      setTimeout(() => {this.formClass.valid = false }, 1500);
    }
  }
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

.hiragana {
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
  height: 60px;
  font-size: 25px;
  padding: 0 25px;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0px 4px 0 #27ae60;
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
</style>
