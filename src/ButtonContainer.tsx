import React, {useEffect, useState} from 'react';
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
    count: 0
  })

  const testLaunch = () => {

    if(allValues.isWorking) {
      cancelLaunch('User cancelled')
      return
    }

    const timeout = Number(props.timeout) || 0 
    setTimeout(initiateLaunch, timeout)

    setButtonState({
      ...allValues, 
      isWorking: !allValues.isWorking,
      buttonText: 'Launching',
      tooltipMessage: 'Cancel launch',
     })
    
  }

  const cancelLaunch = (err: string) => {
    setButtonState({
      ...allValues, 
      isWorking: false,
      isError: true,
      buttonText: 'Launch Rocket',
      tooltipMessage: 'Ignition error',
     })
    console.log(err);
  }

  const initiateLaunch = async (): Promise<any> => {
    const data = await fetch(props.url).catch(cancelLaunch)
    console.log(data)
    return data
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