import React, { useState } from 'react';
import Button from './Button'
import Tooltip from './Tooltip'

type Props = {
  url: string,
  timeout?: string
}

const ButtonContainer = ({...props}: Props)  => {

  const [allValues, setButtonState] = useState({
    isWorking: false,
    isError: false,
    isDisabled: false,
    buttonText: "Launch Rocket",
    tooltipMessage: 'Ignites the fuel',
  })

  const testLaunch = () => {

    const ms = Number(props.timeout) || 0 
    const timeout = setTimeout(initiateLaunch, ms)

    if(allValues.isWorking) {
      cancelLaunch('Ignition error')
      clearTimeout(timeout)
      return
    }

    setButtonState({
      ...allValues, 
      isWorking: !allValues.isWorking,
      buttonText: 'Launching',
      tooltipMessage: 'Cancel launch',
     })
    
  }

  const initiateLaunch = async (): Promise<any> => {
    const data = await fetch(props.url).catch(cancelLaunch)
    console.log(data)
    return data
  }

  const cancelLaunch = (err: string) => {
    setButtonState({
      ...allValues, 
      isWorking: false,
      isError: true,
      buttonText: 'Launch Rocket',
      tooltipMessage: err,
     })

    console.log(err);
  }



  return (
    <>
        <div className="buttons">
          <Button 
            className={allValues.isError  ? 'error' : ''} 
            labelText="Press button to "
            isWorking={allValues.isWorking}  
            isError={allValues.isError}          
            buttonText={allValues.buttonText}
            onClick={testLaunch}
          >{allValues.buttonText}</Button>
        </div>
        {allValues.isDisabled ? '' : 
          <Tooltip 
            className={`tooltip ${allValues.isError  ? 'error' : ''}`} 
            text={allValues.tooltipMessage} 
            isWorking={allValues.isWorking}
            isError={allValues.isError}
          />}
    </>
  )
}

export default ButtonContainer 