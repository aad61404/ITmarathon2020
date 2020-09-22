import React , {useState} from 'react';
import axios from 'axios'

const App = (props) => {
  const [value] = useState(10)


  axios.get('http://localhost:3001/notes').then(response => {
    const notes = response.data
    console.log(notes)
  })


  const hello = (who) => {
    const handler = () => {
      alert('hello', who)
    }
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('function')}>button</button>
    </div>
  )
}
export default App;