import React from 'react'

const ChildeComponent = React.memo(
    (props) => {

          console.log("Child Component got re-rendered again");
  return (
    <div>
        <button onClick={props.handleClick}>
            {props.buttonName}
        </button>
    </div>
  )
}
)

export default ChildeComponent
//React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nahi toh re-render nahi hoga.
//if ur sending a function, then react.memo wont be able to save you from re-rendering beacuse on sending the function 
// the handle click  in parent (App.jsx) component changes when the state of count variable changes that
// indirectly cause the whole component to render again. which causes the handleClick f to recreate ----> if it recreates the reference chnages.