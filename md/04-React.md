

開始之前
我聊一下天，關於出發點 :
比如我想學如何架設一個網站
或是學著寫出一些很酷的網站特效
甚至只是混口飯吃

這些出發前設定的目標，就決定了你要到達的地方
所以心中堅信自己的道路很重要
在之後前進的路上，每當完成了一個階段(三分之一 或 四分之一)

我就會停下來思考 (其實也不一定要停下來，邊走邊想也是可以的)
我的最終目標是什麼 ?
目前完成的事情有沒有偏差我的目標太多、或是有哪些地方可以做得更好

畢竟路線不對最終就是越走越遠嘛 !

當然如果你是熱血型而且確信的當然可以一路衝遠一些

再一次又一次的審視自己、向他人請益的過程中，共勉之

今天先聊到這，讓我們開始吧 !


先來看一個範例 :

https://codesandbox.io/s/react05-1-p5c5i?file=/src/App.js

```
import React, { useState } from 'react';

const App = (props) => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
  
    return (
      <div>
        <div>
          {left}
          <button onClick={() => setLeft(left + 1)}>
            left
          </button>
          <button onClick={() => setRight(right + 1)}>
            right
          </button>
          {right}
        </div>
      </div>
    )
  }
  

export default App;

```

如果這邊有不太明白的地方
可以在看一下 React 官方的Hook 相關文章
我們透過useState  存取一個變數  跟 使用該變數的方法

接下來讓我們做一個小作業
假設我們要做一個  投票統計表 (詳情)
ps. 以下 統計表跟詳情 指的是同一個東西，我個人筆誤，不好意思
[Imgur](https://i.imgur.com/N8Usj6l.jpg)

點擊後 會改變 底下的統計表 (詳情)
同意人數
中立人數
反對人數
得票分數 : 同意 - 反對 / 總投票人數(合計)
同意比例 : 同意人數 / 總投票人數(合計)

讓我們來看看 React底下要怎麼做吧

首先: 我讓我們先繪製完靜態畫面，click 計算 function 暫時先空著不寫

應該會需要以下個組件 並設定 props 幫助我們這傳遞資料
投票 Header ( props 設定一個text)
按鈕 Button ( props 設定一個text)
單一統計元素 Statistic ( props 設定兩個 一個 name 跟 value)
統計表(詳情) Statistics  (整合所有統計 跟 單一統計 只差s 觀看時請注意)
[Imgur](https://i.imgur.com/kHLsEok.jpg)
```
// Header , Button
const Heading = (props) => <h1>{props.text}</h1>;
const Button = (props) => <button>{props.text}</button>;
```

```
// Statistic , Statistics
const Statistic = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  return (
    <div>
      <Heading text="統計表" />
      <table>
        <tbody>
          <Statistic name="同意" value={props.good} />
          <Statistic name="中立" value={props.neutral} />
          <Statistic name="反對" value={props.bad} />
          <Statistic name="合計" value={props.total} />
          <Statistic name="得票分數" value={props.averageScore} />
          <Statistic name="同意比例" value={props.percentPositive + "%"} />
        </tbody>
      </table>
    </div>
  );
};

// 另外新增一個 初始值
  const statisticsProps = {
    hasFeedback: true,
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    averageScore: 0,
    percentPositive: 0
  };
```
完成後會長這樣
https://codesandbox.io/s/react05-3-71fex?file=/src/App.js:812-966

補充 ...StaticProps 為 es6 展開(spread)運算符
可以看這裡 https://zhenyong.github.io/react/docs/jsx-spread.html

之後讓我們在 App.js 加上 資料計算和 點擊事件
```
  const [agree, setAgree] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [disagree, setDisagree] = useState(0);

  // 合計
  const total = agree + neutral + disagree;

  // 得票分數
  // 算式
  const countAvg = (agree, disagree, total) => {
    let result = (agree - disagree) / total;
    if (Number.isNaN(result)) return 0;
    return result;
  };
  // 帶入
  const averageScore = countAvg(agree, disagree, total);

  // 同意比例 
  const getPercent = (agree, totalAmount) => {
    let result = (agree / totalAmount) * 100;
    return Math.round(result * 1000) / 1000;
  };
  //  getPercent(3,10)  // 30
  const percentPositive = getPercent(good, total);
```

三個按鈕 綁定事件
```
  const handleButtonClick = (type) => {
    setHasFeedback(true);

    switch (type) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };
```

將剛才的 statisticsProps 改成動態參數
```
const statisticsProps = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: total,
    averageScore: averageScore,
    percentPositive: percentPositive
};
```

範例 結果顯示
https://codesandbox.io/s/react05-2-cpk44?file=/src/App.js