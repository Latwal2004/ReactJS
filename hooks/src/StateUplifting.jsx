export const Card = (props) => {
    return(
            <div>
               <input type="text" onChange={(e) => props.setName(e.target.value)} />
               <p>Name state value inside {props.title} is  :  {props.name} </p>
            </div>

    )
}