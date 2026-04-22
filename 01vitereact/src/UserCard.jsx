// userInfo and UserCard are interrelated
import React from "react";
import { UserInfo } from "./UserInfo";
export const UserCard = (props) => {
    return (
        <div>
            <h2>User Details</h2>
            <UserInfo {...props} />
        </div>
    )
}
// export default UserCard


//if you want specific field from of props
// export const UserCard = ({id, ...rest}) =>{
//     return(
//         <div>
//             <h2>User : {id}</h2>
//             <UserInfo {...rest}/>
//         </div>
//     )
// }