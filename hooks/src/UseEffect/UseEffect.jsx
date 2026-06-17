import { useEffect, useState } from "react"

export const UseEffect1 = () => {
    const [count, setCount] = useState(0);
    const [total, SetTotal] = useState(1)
    // useEffect(() =>{
    //     // side effect function
    //     return () =>{
    //         // clean up function
    //     }
    // },[dependencies])

    // varrriations :1
    // runs on every render
    // useEffect(() =>{
    //     alert("I will run each render");
    // })

    //Varriation : 2
    //runs only on first render
    // useEffect(() =>{
    //     alert('i will run on first render only')
    // },[])

    //variation:3
    //run on dependency count ie when we update the count.
    // useEffect(()=>{
    //     alert('i will run every time when count is updated')
    // },[count])

    //varriation:4
    //multiple dependencies
    // useEffect(() =>{
    //     alert('i will run every time when count/ total is updated')
    // },[count,total])

    //varriation:5
    //Adding cleanup function
    useEffect(() =>{
        alert('Count is updated')
        return () =>{
            alert('Count is unmounted from UI')
        }
    },[count])

    function handleClick() {
        setCount(count + 1);
    }
    function handleTotal(){
        SetTotal(total+1)
    }
    return (
        <div>
            <button onClick={handleClick}>
                click Me
            </button>
            <br />
            count is: {count}
            <br />
            <button onClick={handleTotal}>
              increase Me
            </button>
            <br />
            total is:{total}
        </div>

    )

}