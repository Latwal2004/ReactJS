import { useState } from "react";
import {ColorSwitch} from './colorSwitch'
export const App = ()=>
{

  const [clicks,setClicks] = useState(0);
  function handleClickOutside(){
    setClicks(clicks => clicks + 1);
  }

function getRandomColor(){
  let r = 150 + Math.round(100 * Math.random());
  let g = 150 + Math.round(100 * Math.random());
  let b = 150 + Math.round(100 * Math.random());
  return `rgb(${r}, ${g}, ${b})`;
}

function handleColorChange()
{
   let bodyStyle = document.body.style;
   bodyStyle.backgroundColor = getRandomColor();
}

  return(
    <div style={{width : '100%', height :"100%"}} onClick={handleClickOutside}>
      <ColorSwitch onchangeColor={handleColorChange}/>
      <h2>Clicks on page : {clicks}</h2>
    </div>
  )
}