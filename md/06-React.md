
今天來介紹的主題是 
# Redux 

哎呀 是不是沒按照規矩來，原本接下來幾天的進度不是與服務器(Server)通信嗎
原因是 ... 在工作上近期急需使用到它
想藉著機會，快速把趕快把它複習回來
關於讀者，實在有不好意思

不過讀者不用擔心，
但不影響我們抵達終點時所學習的內容
只是順序調換一下

最後都會把技術整合起來
在此說明一下，接下來的5期會先介紹Redux ，並加上React使用它

----------------------------

# 開始前
基礎知識
- 熟悉 HTML & CSS
- 熟悉 ES6 語法和特性
- React 相關知識 : [JSX](https://reactjs.org/docs/introducing-jsx.html), [State](https://reactjs.org/docs/state-and-lifecycle.html), [Function Components and Props](https://reactjs.org/docs/components-and-props.html), [Hooks](https://reactjs.org/docs/hooks-intro.html)

如果您還不熟悉這些主題，建議您花一些時間先熟悉一下這些主題，然後再回來學習Redux。
您準備好了，那麼讓我們來一探究竟吧！


- 什麼是 Redux ? 
- 為什麼我們需要它 ? 
- 什麼時候需要使用它 ?

---------------------------------------------------

## 什麼是Redux
Redux是JavaScript應用程序的狀態容器。
隨著我們網站上操作更加複雜、需要儲存的狀態越來越多
對於網站上面資料的管控也就越來越難控制

在我們React組件之間資料的傳輸時，
若是組件一多，每個狀態也就需要給予配置
因此若有一個工具來管理
那就太好了


## 它解決了什麼問題

### Redux 特性
- 一個儲存庫
- Action 描述事件
- Reducer 實現事件

### 什麼時候會需要用到它
如果你的應用有以下場景，可以考慮使用Redux

- 某個組件的狀態，需要共享
- 某個狀態需要在任何地方都可以拿到
- 一個組件需要改變全局狀態
- 一個組件需要改變另一個組件的狀態
