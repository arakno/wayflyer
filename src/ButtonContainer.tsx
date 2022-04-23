import React, {useState} from 'react';
import Button from './Button'
import Tooltip from './Tooltip'

type Props = {
  value: string,
}

const ButtonContainer = ({...props}: Props)  => {

  const [allValues, setButtonState] = useState({
    isWorking: false,
    isError: false,
    launchMessage: 'Ignites the fuel'
  })

  const testLaunch = () => {
    setButtonState({
      ...allValues, 
      isWorking: !allValues.isWorking,
      launchMessage: 'Ignition error'
     })
    
  }

  // const checkSystemsCall = () => {
  //   const res = fetch('https://httpbin.org/delay/2')
  //   res.then()
  //   return res
  // }

  return (
    <>
        <div className="buttons">
          <Button 
            labelText="Press button to "
            buttonText="Launch Rocket"
            isWorking={allValues.isWorking}
            onClick={testLaunch}
          />
        </div>
        {allValues.isError ? '' : <Tooltip text={allValues.launchMessage} />}
    </>
  )
}

export default ButtonContainer 