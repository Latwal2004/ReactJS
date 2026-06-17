export const User = () => {
    const age = 21;
    const name = "Harish"

    const userObj = {
        name: "anil Sidhu",
        email: "anil@test.com",
        age: 29,
    }

     const userArray = ["sam", "peter", "bruce"];
    function callFun() {
        alert("Function called")
    }

    function greetMsg(name) {
        return `Welcome to user dashbord  : ${name}`;
    }

    function calculate(a, b, op) {
        switch (op) {
            case "+":
                return a + b;
                break;
            case "-":
                return a - b;
                break;
            case "*":
                return a * b;
                break;
            case "%":
                return a % b;
                break;
            case "/":
                return a / b;
                break;
            default:
                return null;
        }


    }
    return (
        <div style={{ backgroundColor: "#D4DFD1", textAlign: "center", color: "black" }}>

            <img src="" alt="harish image" className="photo" />
            <h1>Employee Name:  {name}</h1>
            <h2>Age : {age}</h2>
            <p>{greetMsg("Harish")}</p>
            <div>
                <h1>Projects :</h1>
                <ul style={{ listStyle: "none", fontSize: "18px" }}>
                    <li>Invented new traffic lights</li>
                    <li>Rehearse a movie scene</li>
                    <li>Improve Spectrum technology</li>
                </ul>
            </div>
            <div>
                <h4>Perfoming calculation : {calculate(10, 20, "*")}</h4>

            </div>
            <button style={{ backgroundColor: "green", borderRadius: "5px", fontSize: "18px", padding: "5px", marginBottom: "10px", color: "white", boxShadow: "2px 2px  2px  rgba(255,255,255,0.6)" }} onClick={() => callFun()}>Click Me</button>

            <h1>{userObj.name}</h1>
            <h1>{userObj.email}</h1>
            <h1>{userObj.age}</h1>
            <h1>{userArray[0]}</h1>
        </div>
      
    )
}