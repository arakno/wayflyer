import React from 'react';
import ButtonContainer from './ButtonContainer'

const App = () => {
    return (
      <div className="App">
        <ButtonContainer url="https://httpbin.org/delay/2" timeout="1000" />
      </div>
    )
}

export default App;
