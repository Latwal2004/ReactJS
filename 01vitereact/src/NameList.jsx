export const NameList  = () =>{
    const names = ["Bruce","clark","Diana"];

    const nameList = names.map((name,idx) => <h2 key={idx}>{idx} {name}</h2>);

    return(
        <div>{nameList}</div>
    )

}

export default NameList