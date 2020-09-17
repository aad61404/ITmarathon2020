今天會提到  **JSX** , **解構賦值** , **Component** , **Hook** 
前一篇文章 範例中 其實已經悄悄使用了
但是並沒有解釋清楚，所以今天稍微介紹一下

礙於篇幅限制(所以把這幾個項目在一起講)

-----------------------------------------

## JSX 

JSX => JavaScript XML 
JSX 長的有一點像HTML 但並不是HTML
JSX　使我們可以在React中編寫　HTML

```
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)
```
每個 JSX element 都只是呼叫 React.createElement() 的語法糖。當你使用 JSX 的時候你將不需要直接呼叫React.createElement() 上述僅為示範

[範例連結01](https://i.imgur.com/saHCZyY.jpg)

## 【解構賦值】 - Destructuring assignment
在我們繼續之前，我們先看一看 React 中會很常使用的規範
是一種 JavaScript 運算式，它允許我們在賦值時從對象和數組中解構出值。

來看一個範例
```
const firstName = person.firstName
const lastName = person.lastName
const city = person.city
```
透過 解構賦值 相等於下面這個

```
const { firstName, lastName, city } = person;
```

這跟 ReactJS 引入Hook 定義是同樣的
```
import React , {useState} from 'React'
```

---------------------------------------------
來看另一個範例
 React中 使用props 未加入解構值
```
const Hello = (props) => {
  const name = props.name
  const age = props.age

  return (
    <div>
      <p>你好 {name}, 我今年 {age} 歲</p>
    </div>
  )
}
```


加入解構值相等於

```
const Hello = (props) => {
  const { name, age } = props

  return (
    <div>
        <p>你好 {name}, 我今年 {age} 歲</p>
    </div>
  )
}
```

[範例連結02](https://i.imgur.com/C7vaHlZ.jpg)

## Component 、Props
使用React 編寫組件、組合組件，甚至可以使相當複雜的應用保持很好的可維護性。實際上，React 的核心理念，就是將許多定制化的、可重用的組件組合成應用。

【props：向組件傳遞數據】
使用所謂的props，可以將數據傳遞給組件。
props  (which stands for properties)

還有一個約定，就是應用的組件樹頂部都要有一個root組件叫做App。

 
讓我們按照如下方式修改組件Hello

const Hello = (props) => {
```
import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>Hello world {props.name}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="jay"/>
      <Hello name="sam"/>
      <Hello name="yoyo"/>
    </div>
  );
};

export default App;
```
[範例連結03](https://i.imgur.com/djMto56.jpg)
## Hook 
為何使用Hook 
Hook 翻譯成中文是鉤子

引用官方文檔的一句話
Hook 不會取代你對 React 概念的了解。相反的，Hook 是對你已經熟悉的 React 概念：props、state、context、refs 以及 lifecycle，提供了一個更直接的 API。正如我們稍後將展示的那樣，Hook 還提供了一種新的強大方式來組合他們。

原先我們寫一個點擊　功能範例可能像這樣
```
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.click = this.click.bind(this);
  }
  click() {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }
  render() {
    return (
      <div onClick={this.click}>
        已經點擊 {this.props.name}
        {this.state.count} 次
      </div>
    );
  }
}
export default App;

```

```
import React, { useState } from "react";

function App(props) {
  //  宣告一個新的 state 變數，我們叫他「click」  
  const [click, setClick] = useState(0);
  return (
    <div onClick={() => setClick((click) => click + 1)}>
      已經點擊 {props.name}
      {click} 次了
    </div>
  );
}
export default App;

```
[範例連結04](https://i.imgur.com/UKDo0aS.jpg)
這裡，useState 是一個 Hook ，React 會在重新 render 的頁面之間保留這些 state (狀態)。
state 數值和一個可以讓你更新 state 的 function。你可以從 event handler 或其他地方呼叫這個 function 來更新他。
是不是方便了許多　?

結語 : 
其實React 還有很多地方 可以呈現，