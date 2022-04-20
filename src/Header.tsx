import React, {useState} from 'react';
import Button from './Button'
import Tooltip from './Tooltip'

type Props = {
  value: string,
}

const Header = ({...props}: Props)  => {

  const [isEnabled, setIsEnabled] = useState<boolean>(false)
  const {value} = props

  const testLaunch = () => {
    setIsEnabled(true)
  }

  return (
      <header className="App-header">
        <div className="buttons">
          <Button 
            labelText="All systems"
            buttonText="Go!"
            onClick={testLaunch}
          />
        </div>
        {isEnabled && <Tooltip color={value}/>}
      </header>
  )
}

export default Header 