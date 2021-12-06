import React from 'react'
import ReactDOM from 'react-dom';

import './App.css';

function url(path) {
  const origin = new URL(document.location).origin
  //return `${origin}${path}`
  return `http://localhost:3000${path}`
}

function Button(props) { // Simple button template
  return (
    <button className={props.class} onClick={props.onClick} id={props.id}>
      {props.value}
    </button>
  )
}

class Bits extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <Button
        value={'Bit 0'}
        id={'b0'}
        class={this.props.standardClass}
        onClick={this.props.onClick}
      />
       <Button
        value={'Bit 1'}
        id={'b1'}
        class={this.props.standardClass}
        onClick={this.props.onClick}
      />
       <Button
        value={'Bit 2'}
        id={'b2'}
        class={this.props.standardClass}
        onClick={this.props.onClick}
      />
       <Button
        value={'Bit 3'}
        id={'b3'}
        class={this.props.standardClass}
        onClick={this.props.onClick}
      />
       <Button
        value={'Bit 4'}
        id={'b4'}
        class={this.props.standardClass}
        onClick={this.props.onClick}
      />
       <Button
        value={'Bit 5'}
        id={'b5'}
        class={this.props.standardClass}
        onClick={this.props.onClick}
      />
       <Button
        value={'Bit 6'}
        id={'b6'}
        class={this.props.standardClass}
        onClick={this.props.onClick}
      />
       <Button
        value={'Bit 7'}
        id={'b7'}
        class={this.props.standardClass}
        onClick={this.props.onClick}
      />
    </div>
    )
  }
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
    const exampleBits = {
      b0: false,
      b1: false,
      b2: true,
      b3: true,
      b4: false,
      b5: true,
      b6: false,
      b7: true
    }

    console.log(this.state.bits)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(exampleBits)
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
        
        <Bits
          onClick={this.handleBitChange}
          standardClass='checkUnchecked'
        />

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
