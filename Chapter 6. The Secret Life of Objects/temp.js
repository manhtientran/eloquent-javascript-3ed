// const normalize = () => {
//   console.log(this.coords.map((n) => n / this.length));
// };

// function normalize() {
//   console.log(this.coords.map((n) => n / this.length));
// }

const normalize = function () {
  console.log(this.coords.map((n) => n / this.length));
};
normalize.call({ coords: [0, 2, 3], length: 5 });
