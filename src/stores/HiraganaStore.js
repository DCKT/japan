import hiragana from '../../data/Hiragana.js';

export default {
  state: {
    hiragana,
  },
  pickRandomHiragana() {
    const selected = hiragana[Math.random() * hiragana.length << 0];
    this.state.selected = {
      hiragana: selected[0],
      romaji: selected[1],
    }
  }
}