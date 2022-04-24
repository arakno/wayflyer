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
    launchMessage: 'Ignites the fuel',
    count: 0
  })

  const testLaunch = () => {
    const timeout = Number(props.timeout) || 0 
    setTimeout(initiateLaunch, timeout)

    setButtonState({
      ...allValues, 
      isWorking: !allValues.isWorking,
      buttonText: 'Launching',
      launchMessage: 'Cancel launch',
      count: allValues.count + 1
     })
    
  }

  const cancelLaunch = (err: any) => {
    setButtonState({
      ...allValues, 
      isWorking: true,
      isError: true,
      launchMessage: 'Ignition error'
     })
    console.log('Ohhhh nooo');
    console.log(err);
  }

  const initiateLaunch = async (): Promise<any> => {
    const url = props.url
    const data = await fetch(url).catch(cancelLaunch)
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
            buttonText={allValues.buttonText}
            onClick={testLaunch}
          />
        </div>
        {allValues.isDisabled ? '' : <Tooltip 
                                      className={`tooltip ${allValues.isError  ? 'error' : ''}`} 
                                      text={allValues.launchMessage} 
                                      isWorking={allValues.isWorking}
                                    />}
        <p>Clicked: {allValues.count}</p>
    </>
  )
}

export default ButtonContainer 