// function Props({name,age,email}){
//     return (
//         <div style={{backgroundColor:"#d2d2a5", textAlign:"center"}}> 
//             <h1>User Component(Passing Props)</h1>
//             <h2>Name :{name}</h2>
//             <h2>Age :{age}</h2>
//             <h2>Email :{email}</h2>
//         </div>
//     )
// }
// export default Props;


function Props({user}){
    return (
        <div style={{backgroundColor:"#d2d2a5", textAlign:"center"}}> 
            <h1>User Component(Passing Props)</h1>
            <h2>Name :{ user.name}</h2>
            <h2>Age :{user.age}</h2>
            <h2>Email :{user.email}</h2>
            <hr />
        </div>
    )
}
export default Props;