import React from "react";

const App = (props) => {
  const { name, age } = props;

  return (
    <div>
      <p>
        你好 {name}, 我今年 {age} 歲
      </p>
    </div>
  );
};

export default App;
