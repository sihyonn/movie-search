import { Component } from "../core/sihyonn";

export default class FruitItem extends Component {
  constructor(payload) {
    super({
      tagName: "li",
      props: payload.props,
    });
  }

  render() {
    this.el.innerHTML = /*html*/ `
    <span>${this.props.name}</span>
    <span>${this.props.price}</span>
    `;

    //클릭한 li태그에 해당하는 name, price 출력해보기
    this.el.addEventListener("click", () => {
      console.log(this.props.name, this.props.price);
    });
  }
}
