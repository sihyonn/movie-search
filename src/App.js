import { Component } from "./core/sihyonn";

// 가져온 컴포넌트 확장하는 개념으로 상속해서 사용
export default class App extends Component {
  render() {
    this.el.textContent = "Hello, world!";
  }
}
