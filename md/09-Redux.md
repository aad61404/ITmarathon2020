雖然是Redux TodoList 最後一篇
但發現好像沒有特別解釋程式的部分

原因是這幾天 我都在工作專案中鬼打牆
下了班還要繼續寫

學習跟實作的時間 少很多
文章就水水的


開始前還是要先看推薦一下這篇
也許你不需要 redux 
https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367

其中有提到 如果你不知道自己專案需不需要使用redux
很可能就不需要...

-------------------------------------------
今天就來繼續 TodoList

index.js 知道今天的主軸是 TodoApp
```
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);
```


我們可以看出 TodoList 三個階層 AddTodo ,  TodoList , VisibilityFilters
```
import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

```

---------------------------------------------

先看 AddTodo 組件
需要建立一個 input 利用組件內state ，輸入值時onChange 儲存變化，
再創建 button 將本地存好的input value 送出並清空
結尾處 connect  將 addTodo 裡面的action 跟 AddTodo 組件綁再一起


./src/components/AddTodo.js
```
import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;

```

--------------------------------------------
todoList 為中間顯示 欄位
會收到  Filter 的  action 變更顯示的值 (決定現在該顯示的狀態，all-全部、completed-完成、incompleted-未完成)
show出 資料 算是Todo (細項)的外層

./src/components/todoList.js

```
import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";  
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};
// export default TodoList;
export default connect(mapStateToProps)(TodoList);

```

Todo.js
顯示每一項資料的 及點擊事件


```
import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => (
  <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
);

// export default Todo;
export default connect(
  null,
  { toggleTodo }
)(Todo);

```

VisibilityFilters.js

```
import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);

```


https://github.com/aad61404/ITmarathon2020/tree/master/code-template/09-redux-Todos/src
