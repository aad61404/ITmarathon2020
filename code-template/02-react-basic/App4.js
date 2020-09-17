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