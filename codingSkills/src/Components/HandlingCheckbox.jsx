import React,{useState}from 'react'

const HandlingCheckbox = () => {
    const[skills,setSkills] = useState([]);
    function handleClick(event){
        console.log(event.target.value, event.target.checked);

        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills([...skills.filter((item) => item !== event.target.value)])
        }
    }

  return (
    <div>
        <h1>Handling Check box in React</h1>
        <h3>Select your skills</h3>
        <input type="checkbox" id="php" value="php" onChange={handleClick} />
        <label htmlFor="php">Php</label>
        <br />
        <input type="checkbox" id="html" value="html" onChange={handleClick}/>
        <label htmlFor="html">Html</label>
        <br />
        <input type="checkbox" id="css" value="css"  onChange={handleClick}/>
        <label htmlFor="css">CSS</label>
        <br />
        <input type="checkbox" id="javaScript" value="javaScript" onChange={handleClick}/>
        <label htmlFor="javaScript">JavaScript</label>
        <br />
        <input type="checkbox" id="react" value="react" onChange={handleClick}/>
        <label htmlFor="react">React</label>
        <br />

        <h3>{skills.toString()}</h3>
    </div>
  )
}

export default HandlingCheckbox