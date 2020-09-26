前一篇使用了在原生js (vanilla)使用 redux 

這偏要說 redux 在react中 如何使用 :

關鍵字 react redux

https://react-redux.js.org/introduction/quick-start


注意Redux 跟 React Redux 的官網 長得有點像 
閱讀時也要注意 React專案版本中，有沒有支援hook  

![Redux](https://i.imgur.com/Ed9SxN8.jpg)


[Redux 連結](https://redux.js.org/)

--------------------------------------------------------------------
--------------------------------------------------------------------

![React-Redux](https://i.imgur.com/b8XQaId.jpg)

[React-Redux連結](https://react-redux.js.org/)


文章範例是 7.0， 介紹官網的 TodoList (工作清單) Example

https://react-redux.js.org/7.0/introduction/basic-tutorial


##### Store
- todos (工作清單): 工作清單儲存區、包含 byIds 、 allIds 
- visibilityFilters (顯示篩選) : 顯示全部(all) 、已完成(completed)、尚未完成(incomplete)

#### Action Creators
- addTodo : 添加待辦工作
- toggleTodo  : 切換已完成 <--> 未完成
- setFilter 建立操作以設置應用的活動篩選器。它採用單個字串變數篩選器

#### Reducer
- todos reduer : 將追加id到其allIds字段，並byIds在收到ADD_TODO操作後在其字段中設置工作室向

#### Action Types 
- action Types : 定義 可以重複使用 方便操作Reducer 的 描述指令 

#### Selectors
- getTodoList  :  返回所有在 store 裡 所有工作清單 
- getTodoById : 在 ID 給出的儲存中找出工作事項。
- getTodos : 它佔用所有 ID, 在 byIds 中尋找每個待辦事項, 並返回待辦事項的最終陣列。
- getTodosByVisibilityFilter 根據顯示標示過濾器過濾工作事項。


在React 中 提供Store
```
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './TodoApp'

import { Provider } from 'react-redux'
import store from './redux/store'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
)
```

Connecting the Components
連接組件
React Redux 提供connect連接功能,供您從 Redux 儲存讀取值(並在存儲更新時重新讀取值)。

connect函數帶有兩個參數，兩個參數都是可選的
mapStateToProps  , mapStateToProps 

#### mapStateToProps 
計算在state中數值 ，建立一個從（外部的）對像state到（UI組件的）props對象的相對應關係 

```
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

```


#### mapDispatchToProps
用於建立UI組件的參數到store.dispatch方法。然後，它定義了該使用者的操作應該認為Action，傳給Store。它可以是一個function，也可以是一個Object。

如果mapDispatchToProps是一個函數，會得到dispatch和ownProps（容器組件的props對象）兩個參數。

```
const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
      });
    }
  };
}
```

#####  React Redux - TodoList

官方範例如下
```
const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
})

const mapDispatchToProps = {
  // ... normally is an object full of action creators
}

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
)
// and that function returns the connected, wrapper component:
const ConnectedComponent = connectToStore(Component)

// We normally do both in one step, like this:
connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
```

先到範例中 嘗試一下
https://codesandbox.io/s/9on71rvnyo?file=/src/components/VisibilityFilters.js

了解如何使用
程式碼沒有完全看懂沒關係
可以先了解 資料結構和上述提到內容中、程式碼出現的位子
有個印象、搭配官網來回觀看

引用
https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html

https://react-redux.js.org/7.0/introduction/basic-tutorial

