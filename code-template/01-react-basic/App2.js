import React from 'react';

const Child = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>
        嗨 {props.name}, 你今年 {props.age} 歲
      </p>
      <p>所以你出生於 {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = '小叮噹'
  const age = 10

  return (
    <div>
      <h1>哆啦A夢</h1>
      <Child name="大雄" age={2 + 10} />
      <Child name={name} age={age} />
    </div>
  )
}

export default App;