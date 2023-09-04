import { Component } from "./core/sihyonn";

export default class App extends Component {
  constructor() {
    super({
      state: {
        fruits: [
          { name: "a", price: 1000 },
          { name: "b", price: 2000 },
          { name: "c", price: 3000 },
        ],
      },
    });
  }
  render() {
    console.log(this.state.fruits);

    this.el.innerHTML = /*html */ `
    <h1>Fruits</h1>
    <ul>
      ${this.state.fruits
        .filter((fruit) => fruit.price < 3000)
        .map((fruit) => `<li>${fruit.name}</li>`)
        .join(" ")}
    </ul>
    `;
  }
}
