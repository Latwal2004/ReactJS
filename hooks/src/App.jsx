import { useState } from 'react'
import {SimpleCounter} from './SimpleCounter'
import {PrevStateCounter} from './PrevStateCounter'
import {BatchingCounter} from './BatchUpdate'
import {ConsoleMsg} from './LoginCard'
import { Card } from './StateUplifting'
import {Accordian} from './liftingComponents/accordian'
import { UseEffect1 } from './UseEffect/UseEffect' 
import {LoggerComponent} from './UseEffect/LooderComponent'
import {TimerCount} from './UseEffect/TimerComponent'

// useeffect revision
import {UseEffectEveryRender} from './UseEffect/evryRender'
import {UseEffectMountOnly} from './UseEffect/firstMount'
import {UseEffectSingleDependency} from './UseEffect/OneStateChange'
import {UseEffectMultipleDependency} from './UseEffect/MultipleDependencies'
import {UseEffectCleanup} from './UseEffect/CleanUp'
import {UseEffectTimer} from './UseEffect/RealExample'
import {ResizeWindow} from './UseEffect/WindowProject'
function App() {
// state create
// state manage
// state pass
//state sync m chlegi
  const [name,setName] = useState('');
  return (
    <>
    {/* <SimpleCounter/> */}
    {/* <PrevStateCounter/> */}
    {/* <BatchingCounter/> */}
    {/* <LoginCard/> */}
    {/* <ConsoleMsg/> */}


    {/* stateUplifting */}
    <div>
      {/*passing state as a prop to child compnent*/} 
      {/* <Card title = "Card1" name = {name} setName = {setName}/> */}
      {/* <Card title = "Card2" name = {name} setName = {setName}/> */}
      {/* <p>I am inside parent component and value of name is :{name}</p> */}
    </div>


    {/* <Accordian/> */}

      {/* useffects */}
      {/* <UseEffect1/> */}
      {/* <LoggerComponent/> */}
      {/* <TimerCount/> */}

      {/* revision of useEffects */}
      {/* <UseEffectEveryRender/> */}
      {/* <UseEffectMountOnly/> */}
      {/* <UseEffectSingleDependency/> */}
      {/* <UseEffectMultipleDependency/> */}
      {/* mounted */}
      {/* <UseEffectCleanup/> */}
      {/* unmounted */}
      {/* <UseEffectTimer/> */}
      <ResizeWindow/>f
    </>
  )
}

export default App
