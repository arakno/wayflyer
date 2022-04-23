import React, {Component} from 'react';
import ButtonContainer from './ButtonContainer'


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
      <div className="App">
        <ButtonContainer value={value} />
      </div>
    )
  }
}

export default App;
