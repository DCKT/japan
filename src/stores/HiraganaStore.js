import hiragana from '../../data/Hiragana.js';

export default {
  state: {
    hiragana,
    currentQuizz: 0,
    failed: [],
    found: [],
    error: 0,
  },
  pickRandomHiragana() {
    const selected = this.state.quizz.splice(Math.random() * this.state.quizz.length << 0, 1)[0];
    
    this.state.selected = {
      hiragana: selected[0],
      romaji: selected[1],
    };
    this.state.currentQuizz++;
  },

  initQuizz() {
    this.state.quizz = hiragana.slice();
    this.pickRandomHiragana();
  },

  resetQuizz() {
    this.state.quizz        = hiragana.slice();
    this.state.failed       = [];
    this.state.found        = [];
    this.state.currentQuizz = 0;
    this.state.error        = 0;
    this.pickRandomHiragana();
  },

  passCurrentHiragana() {
    var isDone = false;
    this.state.failed.push(this.state.selected);

    if (this.state.quizz.length) {
      this.pickRandomHiragana();
    }
    else {
      isDone = true;
    }

    return isDone;
  },

  addToFound() {
    var isDone = false;
    this.state.found.push(this.state.selected);

    if (this.state.quizz.length) {
      this.pickRandomHiragana();
    }
    else {
      isDone = true;
    }

    return isDone;
  },

  check(romaji) {
    const isValid = romaji == this.state.selected.romaji;

    if (!isValid) {
      this.state.error++;
    }

    return isValid;
  }
}