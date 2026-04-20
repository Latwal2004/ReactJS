import { useState } from "react";

//components
// function Chai(){
//     return(
//         <h3>Chai aur code</h3>
//     )
// }
// export default Chai

// function Header(){
// return(
//     <>
//     <header><h1>ReactJS</h1></header>
//     </>    
// );
// }
//  export default Header



// Props passing data to component
// function Greeting(props)
// {
//     return(
//         <h1>Hello, {props.name}, {props.age}</h1>
//     )
// }
// export  default Greeting


//Responding to events
// function Mybutton(){
//     function handleClick(){
//         alert('Clicked on me')
//     }

//     return (
//         <button onClick={handleClick}>
//             click me 
//         </button>
//     );
// }
// export default Mybutton

// You’ll get two things from useState: the current state (count), 
// and the function that lets you update it (setCount). 
// You can give them any names, but the convention is to
//  write [something, setSomething].
function MyButton(){
    // usestate always returns an array
    const [count, setCount] = useState(0);


    function handleClick(){
        setCount(count + 1);
        console.log(count);
    }

    return(
        <button onClick={handleClick}>
            clicked with usestate
        </button>
    )
}

export default MyButton