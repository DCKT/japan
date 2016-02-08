import { dakuten, handakuten, katakana } from '../../data/Katakana.js';

export default {
  state: {
    katakana,
    dakuten, 
    handakuten,
    currentQuizz: 0,
    failed: [],
    found: [],
    error: 0,
  },
}