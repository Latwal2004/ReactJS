export const EventHandle = () =>
{

    const handleClick = () =>{
        alert('I am clicked')
    }
    const handleMouseOver= () =>{
        alert('Para Hovered')
    }
    const handleChange = (e)=>{
    console.log("value till now is : ",e.target.value)
    }

    function handleSubmit(e){
        e.prevent.default();
        alert('form submitted');
    }

    return(
        <div>
            <br /><br />
            <button onClick={() =>{ alert('I am cicked with not immediate invocations')}}>Button</button>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            <p onMouseOver={handleMouseOver} style= {{backgroundColor:"red", border:"2px solid black" , width:'100px'}}>I am a Para</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}