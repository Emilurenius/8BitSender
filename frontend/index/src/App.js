import React from 'react'
import ReactDOM from 'react-dom';

import './App.css';

function url(path) {
  const origin = new URL(document.location).origin
  return `${origin}${path}`
  //return `http://raspi4:3000${path}`
}

function Button(props) { // Simple button template
  return (
    <button className={props.class} onClick={props.onClick} id={props.id}>
      {props.value}
    </button>
  )
}

function NumInput(props) { // Simple input template
  return (
    <input type="number" className={props.class} id={props.id} placeholder={props.placeholder}/>
  )
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bits: Array(8).fill(false)
    }
  }

  handleSend = (e) => {
    console.log('Sending bits')

    const text = document.getElementById('dType').value
    console.log(text)
    const binaryData = parseInt(text).toString(2)
    console.log(binaryData)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({b1:1})
    }
    fetch(url('/setpins'), requestOptions)
  }

  handleBitChange = (e) => {
    console.log(`bit flipped: ${e.target.id}`)

    this.state[e.target.id] = !this.state[e.target.id]
    console.log(this.state[e.target.id])

    if (this.state[e.target.id]) {
      e.target.className = 'checkChecked'
    }else {
      e.target.className = 'checkUnchecked'
    }
  }

  render() {
    return (
      <div className='main' id='main'>
        
        <div>
          <p>
            I want to roll a D
            <NumInput 
              class='textIn'
              id='dType'
              placeholder='20'
            />
          </p>
        </div>

        <Button 
          value='Send data'
          id='sendButton'
          class='button'
          onClick={this.handleSend}
        />
      </div>
    );
  }
  
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

export default App;
