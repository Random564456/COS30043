const app = Vue.createApp();

app.component(
  "app-convert", // indicating the component tag
  {
    // define the template for the component
    template:
      // your code here
      `
            <div class="container mt-5">
              <div class="row">
                <span><strong>Enter number from 1 to 99</strong><input v-model="numVar" class="mx-2" type="text"></span>
              </div>
              <div class="row">
                <p>{{num2roman(numVar)}}</p>
              </div>
            </div>`,
    data: function () {
      return {
        numVar: "",
      };
    },

    methods: {
      num2roman: function (myNum) {
        // your code here
        const num = parseInt(myNum, 10);

        // Validate input
        if (isNaN(num) || num < 1 || num > 99) {
          return "";
        }

        // Conversion logic
        const romanMapping = [
          ["XC", 90],
          ["L", 50],
          ["XL", 40],
          ["X", 10],
          ["IX", 9],
          ["V", 5],
          ["IV", 4],
          ["I", 1],
        ];

        let roman = "";
        let remaining = num;

        for (const [romanChar, value] of romanMapping) {
          while (remaining >= value) {
            roman += romanChar;
            remaining -= value;
          }
        }

        return roman;
      },
    },
  },
);

app.mount("#app");
