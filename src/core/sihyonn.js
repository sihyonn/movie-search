/// Component ///

export class Component {
  constructor(payload = {}) {
    // 항상 div가 들어오는게 아니기 때문에 구조분해할당으로 내가 원하는 태그를 넣겠다
    const { tagName = "div", state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }
  render() {
    /// ...일단 비워줌 확장해서 사용할때 사용할거
  }
}

/// Router ///
function routeRender(routes) {
  if (!location.hash) {
    history.replaceState(null, "", "/#/");
  }
  const routerView = document.querySelector("router-view");
  // 물음표 기준으로 왼 오 내용 구분해서 배열로 만들 수 있음
  // #/about이 0번째 ? 다음 name=sihyonn이 1번째
  const [hash, queryString = ""] = location.hash.split("?");

  // a=123&b=456
  // ['a=123', 'b=456']
  // {a : '123', b: '456'} => 요게 최종만들어진 query
  const query = queryString.split("&").reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {});
  history.replaceState(query, ""); // 두번째 주소부분은 생략가능

  const currentRoute = routes.find((route) =>
    new RegExp(`${route.path}/?$`).test(hash)
  );
  routerView.innerHTML = "";
  routerView.append(new currentRoute.component().el);

  window.scrollTo(0, 0);
}

export function createRouter(routes) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes);
  };
}

/// Store ///
export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {};
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key], // key 값 사용할때 쓰는 state['message']
        set: (val) => {
          state[key] = val;
          // 각각의 콜백을 이제는 배열데이터가 들어오니까 forEach로 수행해주게 변경
          this.observers[key].forEach((observer) => observer(val));
        }, // 값을 할당할때 val = value임
      });
    }
  }

  // 어떤 데이터의 이름을 감시하고 데이터가변경되면 어떤 함수를 실행할건지 => set 함수가 동작하면 데이터가 변경 된거니까
  // this.observer[key]() 호출하는거지
  // 고도화는 삼항연산자, Array.isArray()로 배열인지 아닌지 확인해서 배열이면 push 사용되니까 콜백을 넣어주고, 아니면 콜백자체를 배열에 담아
  subscribe(key, cb) {
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : (this.observers[key] = [cb]);
  }
}
