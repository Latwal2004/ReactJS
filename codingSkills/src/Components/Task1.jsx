import {useState} from'React'

function Task1(){
    const [value,setValue] = useState("");
    return (
        <div style={{ border:"5px solid green",display:"flex",flexDirection:"column", alignItems:"center",margin:"20px",padding:"10px",justifyContent:"center",}}>
            <div>
            <input type="text" value={value} placeholder="enter the name" onChange={(event) => setValue(event.target.value)}/>
            <h1>{value}</h1>
            <br />
            <br />

            <button onClick={() => setValue("")}> Clear</button>
        </div>
        </div>
    )
}

export default Task1;