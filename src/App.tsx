import React, {Component} from 'react';
import './App.css';
import Header from './Header'


type State = {
  value: string
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
        value: ''
      }
    this.updateMessage = this.updateMessage.bind(this)
  }
  
  updateMessage = (msg: string) => {
    this.setState(() => ({
        value: msg
    }))
  }

  render() {
    const {value} = this.state

    return (
      <div id="body">
        <Header value={value} />
      </div>
    )
  }
}

export default App;
