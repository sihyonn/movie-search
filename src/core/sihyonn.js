/// Component ///
export class Component {
  constructor(payload = {}) {
    // 항상 div가 들어오는게 아니기 때문에 구조분해할당으로 내가 원하는 태그를 넣겠다
    const { tagName = "div" } = payload;
    this.el = document.createElement(tagName);
    this.render();
  }
  render() {
    /// ...일단 비워줌 확장해서 사용할때 사용할거
  }
}
