import { Component } from "./core/sihyonn";

// 가져온 컴포넌트 확장하는 개념으로 상속해서 사용
export default class App extends Component {
  constructor() {
    super({
      state: {
        inputText: "",
      },
    });
  }
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /*html*/ `
      <input />
      <button>Click!</button>
    `;

    const inputEl = this.el.querySelector("input");
    // 입력이 들어오면 그 값을 저장
    inputEl.addEventListener("input", () => {
      this.state.inputText = inputEl.value;
    });

    const buttonEl = this.el.querySelector("button");
    buttonEl.addEventListener("click", () => {
      console.log(this.state.inputText);
    });
  }
}
