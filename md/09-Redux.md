
前情提要

今天在繼續寫TodoList前
先複習一下 react-redux 的使用方法

* 再次提醒 
redux連結中，Redux Essentials 是有使用hook的，但你如果維護的React專案版本較舊
請先觀看 同樣是在 redux連結中 Basics Tutorial

(比如說: 我維護的專案就是React 16.4)
那我在看React-Redux時就要算選擇之前的版本  7.0
[Redux 連結](https://redux.js.org/)
[React-Redux連結](https://react-redux.js.org/)

--------------------------------------------------


https://codesandbox.io/
當你使用CodeSandbox時，它可以快速建立一個環境方便你開發、測試


個人的DashBoard面板
![DashBoard](https://i.imgur.com/zWVRZ5m.png)

創建一個template

![template](https://i.imgur.com/lAXUFEf.png)

選擇react-redux
![react-redux](https://i.imgur.com/sO0Htt3.png)

確認你是否還記得 action , reducers , stores 之間的關係
需注意的是 counter 範例中使用的是 redux 
而我們接下來要使用的是 react-redux
來看看兩者的差異吧

Counter 範例
https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter?file=/src/index.js
TodoList 範例
https://codesandbox.io/s/9on71rvnyo


#### Counter 範例使用redux
index.js
```
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)

```

#### TodoList 範例中使用 react-redux
index.js
```
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
```
store.js
```
import { createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(rootReducer);
```

剛開始兩者容易混淆，但先看完redux的核心概念後再去看react-redux
概念就會清晰很多

