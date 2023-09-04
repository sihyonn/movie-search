export default class App {
  constructor() {
    //메모리 상에만 만들어지는 div 요소
    this.el = document.createElement("div");
    this.el.textContent = "Hello, world!";
  }
}
