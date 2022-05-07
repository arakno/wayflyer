import { useState } from 'react';
import Button from './Button'
import Tooltip from './Tooltip'

type Props = {
  url: string,
  timeout?: string
}

const ButtonContainer = ({...props}: Props)  => {

  const ms: number = Number(props.timeout) || 0 
  
  const defaultState = {
    isWorking: false,
    isError: false,
    isDisabled: false,
    buttonText: "Launch Rocket",
    tooltipMessage: 'Ignites the fuel',
  }

  const [buttonValues, setButtonState] = useState(defaultState)

  const testLaunch = () => {

    if(buttonValues.isWorking) {
      cancelLaunch('Ignition error')
      return
    }

    setButtonState({
      ...buttonValues, 
      isWorking: !buttonValues.isWorking,
      buttonText: 'Launching',
      tooltipMessage: 'Cancel launch',
     })

    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        cancelLaunch('Ignition error')
      }, ms)
  
      initiateLaunch()
        .then(res => {
          clearTimeout(timer)
          setButtonState({
            ...buttonValues, 
            ...defaultState
           })
          console.log(res)
          resolve(res)
        })
        .catch(err => {
          clearTimeout(timer)
          reject(err)
        })
    })
  
  }


  // async function fetchWithTimeout(resource, options = {}) {
  //   const { timeout = 8000 } = options;
    
  //   const controller = new AbortController();
  //   const id = setTimeout(() => controller.abort(), timeout);
  //   const response = await fetch(resource, {
  //     ...options,
  //     signal: controller.signal  
  //   });
  //   clearTimeout(id);
  //   return response;
  // }

  const initiateLaunch = async (): Promise<any> => {
    const data = await fetch(props.url).catch(cancelLaunch)
    return data
  }

  const cancelLaunch = (err: string) => {
    setButtonState({
      ...buttonValues, 
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
            className={buttonValues.isError  ? 'error' : ''} 
            labelText="Press button to "
            isWorking={buttonValues.isWorking}  
            isError={buttonValues.isError}          
            buttonText={buttonValues.buttonText}
            onClick={testLaunch}
          >{buttonValues.buttonText}</Button>
        </div>
        {buttonValues.isDisabled ? '' : 
          <Tooltip 
            className={`tooltip ${buttonValues.isError  ? 'error' : ''}`} 
            text={buttonValues.tooltipMessage} 
            isWorking={buttonValues.isWorking}
            isError={buttonValues.isError}
          />}
    </>
  )
}

export default ButtonContainer 