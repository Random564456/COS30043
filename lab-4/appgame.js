const app = Vue.createApp({
  data() {
    const guess = null;
    const randomInt = null;
    const activeAttempt = false;
    message = "";
    return {
      guess,
      randomInt,
      activeAttempt,
      message
    };
  },
  methods: {
    checkGuess(e) {
      if (this.activeAttempt === false) {
        this.activeAttempt = true;
        this.randomInt = Math.floor(Math.random() * 101);
      } else if (this.guess === null) return;

      if (this.randomInt === this.guess) {
        this.message = "You got it!"
      } else if (this.randomInt > this.guess) {
        this.message = "Guess higher"
      } else if (this.randomInt < this.guess) {
        this.message = "Guess lower"
      };
    },
    giveUp() {
        this.message = `The number was ${this.randomInt}`;
    },
    startOver() {
        this.guess = null;
        this.randomInt = null;
    },
  },
});

app.mount("#app");
