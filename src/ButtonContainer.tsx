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
      launchMessage: 'Ignition error'
     })
    console.log('Ohhhh nooo');
    console.log(err);
  }


  const initiateLaunch = async (): Promise<any> => {
    const url = props.url
    const data = await fetch(url).catch(cancelLaunch)
    const res =  await data
    console.log(res)
    return res
  }

  return (
    <>
        <div className="buttons">
          <Button 
            labelText="Press button to "
            isWorking={allValues.isWorking}
            onClick={testLaunch}
            buttonText={allValues.buttonText}
          />
        </div>
        {allValues.isError ? '' : <Tooltip className="tooltip" text={allValues.launchMessage} />}
        <p>Clicked: {allValues.count}</p>
    </>
  )
}

export default ButtonContainer 