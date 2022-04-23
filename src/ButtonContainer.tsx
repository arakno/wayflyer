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
    launchMessage: 'Ignites the fuel',
    count: 0
  })

  const testLaunch = () => {
    const timeout = Number(props.timeout) || 0 
    setTimeout(checkSystemsCall, timeout)

    setButtonState({
      ...allValues, 
      isWorking: !allValues.isWorking,
      launchMessage: 'Cancel launch',
      count: allValues.count + 1
     })

    
  }

  const checkSystemsCall = async () => {
    const url = props.url
    const data = await fetch(url)
    const res =  await data.json()
    console.log(res)
    return res
  }

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
        {allValues.isError ? '' : <Tooltip className="tooltip" text={allValues.launchMessage} />}
        <p>Clicked: {allValues.count}</p>
    </>
  )
}

export default ButtonContainer 