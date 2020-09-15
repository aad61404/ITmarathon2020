import React, { useState } from 'react';

const App = () => {
    const [ counter, setCounter ] = useState(0)
  
    const increaseByOne = () => setCounter(counter + 1)
    
    const setToZero = () => setCounter(0)
  
    return (
      <div style={ {padding: "15px"} }>
        <div>大雄的零用錢 {counter}</div>
        <button onClick={increaseByOne}>
          認真讀書媽媽獎勵一元
        </button>
        <button onClick={setToZero}>
          被胖虎搶走歸零
        </button>
      </div>
    )
  }

export default App;