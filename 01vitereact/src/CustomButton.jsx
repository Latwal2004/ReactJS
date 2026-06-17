export const CustomButton = ({ text }) => {
    // const handleClick = (e) =>{

    //     const name = "codeEvaalution"
    //     console.log("clicked element ",e.target)
    //     console.log("clicked coordinates ",e.clientX, e.clientY);
    //     console.log("Which Mouse Button ",e.button);
    //     alert("Thanks for clicking...")
    // }

    const name = "codeEvalution"

    const handleClick = () => {
        console.log(`Hey ${name}, you clicked  ${text} button`);
    }

    return <button onClick={handleClick}>{text}</button>
    
}