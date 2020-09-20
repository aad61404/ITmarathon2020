前面的範例 都沒提到在react 使用css

在HTML 裡的class 到了react 為了區別使用了className 

### 第一 inline styling

將css 包裝成物件 傳給 style
```
class App extends React.Component {
  render() {
    return (
      <div>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}
```

注意 style 裡面是兩層 {} 大括弧
另外 css 元素設定有 - 符號的 必須刪除 並將下一個字串改為大寫 
例如 :  backgound-color 改為  backgroundColor  、 font-size 改為 fontSize 依此類推 
```
const Header = () => {
  const headerStyle = {
    color: "red",
    fontStyle: "italic",
    backgroundColor: "yellow",
    fontSize: 16
  };
  return (
    <div style={headerStyle}>
      <p>This is a paragraph</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

```

[Imgur](https://i.imgur.com/5rTfoCh.jpg)



### 第二 className
這個就相當單純 只要將 css 引入
並將 class改成 className 就好

App
```
import React from 'react';
import "./styles.css";
const App = () => {
  return (
    <div>
      <p className="blue">我的 className 是blue</p>
    </div>
  );
};

export default App;
```

styles.css
```
.blue {
  background-color : blue;
  color : white;
}
```

第一種跟第二種的 小範例
https://codesandbox.io/s/day4-01-j2njd



如果需要兩個樣式快速做切換呢 ?
這是時候可以體現 JSX 的好處了
在可以將className 跟 js 寫在同一頁

首先我們需要先實作一個 toogle 快速切換

使用前面提到的hook 功能 將 變數 Toggled 和 setToggled 存進useState
並給它一個參數

```
const [Toggled, setToggled] = useState(false);
```
setToggled 已經幫我們綁定功能可以修改Toggled 因此我們可以這樣寫
```
 const toggleTrueFalse = () => setToggled(!Toggled);
```
這樣只需要呼叫 toggleTrueFalse 切換 Toggled 的狀態


```
const Header = () => {
  const [Toggled, setToggled] = useState(false);

  const toggleTrueFalse = () => setToggled(!Toggled);

  const showText = Toggled ? "大雄數到一" : "哆啦a夢數到一";

  return (
    <div>
      <button onClick={toggleTrueFalse}>切換</button> <br />
      {Toggled.toString()} <br />
      {showText}
    </div>
  );
};
```

接下來只要放在 呼叫它render就完成了 範例如下
https://codesandbox.io/s/day4-02-q1xoj?file=/src/App.js:0-512


配合 前面的style 樣式 可以使它更加 豐富
```
import React , {useState} from "react";
import "./styles.css";
// function App() {
const Header = () => {
  const [Toggled , setToggled] = useState(false);

  const toggleTrueFalse = () => setToggled(!Toggled)

  const yellowStyle = {
    color: "red",
    fontStyle: "italic",
    backgroundColor: "yellow",
    fontSize: 16
  };

  const blueStyle = {
    backgroundColor : "blue",
    color : "white",
    fontSize: 20
  }
  const YellowOrBlue =  Toggled ? yellowStyle : blueStyle;
  const showText = Toggled ? "大雄數到一" : "哆啦a夢數到一";

  return (
    <div >
      <button onClick={toggleTrueFalse}>切換</button>
      {Toggled.toString()}
      <p style={YellowOrBlue} >{showText}</p>
    </div>
  );
};

const App = () => {

  return (
    <div>
      <Header />
    </div>
  );
};

export default App;

```

https://codesandbox.io/s/day4-03-4nvij?file=/src/App.js:0-798
