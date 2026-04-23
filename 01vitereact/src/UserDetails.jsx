// conditonal Rendering using if statement

// export const UserDetails = ({ name, isOnline ,hideOffline}) => {

//     if(hideOffline && !isOnline){
//         return null;
//     }

//     if (isOnline) {
//         return (
//             <div>
//                 <h3>{name}</h3>
//                 <span>Online</span>
//                 <p>Available for chat</p>
//                 <button>Send Message</button>
//             </div>

//         );
//     }

//     return (
//         <div>
//             <h3>{name}</h3>
//             <span>Offline</span>
//             <p>Not available</p>
//             <small>Check back Later</small>

//         </div>
//     )

// };



// conditonal Rendering using ternary operator(?)
// export const UserDetails = ({ name, isOnline, hideOffline }) => {

//     if (hideOffline && !isOnline) {
//         return null;
//     }

//     return (
//         <div>
//             <h3>{name}</h3>
//             <span>{isOnline ? "Online" : "Offline"}</span>
//             <p>{isOnline ? "Available for Chat" : " Not Available"}</p>
//             {isOnline ? (
//                 <button>Send Message</button>
//             ) :
//                 (
//                     <small>Check Back Later</small>
//                 )
//             }
//         </div>
//     )
// }

//conditional rendering using  && operator
// export const UserDetails = ({ name, isOnline, hideOffline,isPremium, isNewUser }) => {

//     if (hideOffline && !isOnline) {
//         return null;
//     }

//     return (
//         <div>
//             <h3>{name}</h3>
//             {isPremium && <span>⭐</span>}
//             {isNewUser&& <span>🥳</span>}
//             <span>{isOnline ? "Online" : "Offline"}</span>
//             <p>{isOnline ? "Available for Chat" : " Not Available"}</p>
//             {isOnline ? (
//                 <button>Sens Message</button>
//             ) :
//                 (
//                     <small>Check Back Later</small>
//                 )
//             }
//         </div>
//     )
// }

//conditional rendering using variable
export const UserDetails = ({ name, isOnline, hideOffline, isPremium, isNewUser, role }) => {

    if (hideOffline && !isOnline) {
        return null;
    }

    let roleBadge = null;
    if (role === 'admin') {
        roleBadge = <span>🔑 Admin</span>;
    } else if (role === 'employee') {
        roleBadge = <span>🧑‍💼 employee</span>
    } else if (role === 'vip') {
        roleBadge = <span> 💎VIP</span>
    }


    return (
        <div>
            <h3>{name}</h3>
            {isPremium && <span>⭐</span>}
            {isNewUser && <span>🥳</span>}
            {roleBadge}
            <span>{isOnline ? " Online" : "Offline"}</span>
            <p>{isOnline ? "Available for Chat" : " Not Available"}</p>
            {isOnline ? (
                <button>Sens Message</button>
            ) :
                (
                    <small>Check Back Later</small>
                )
            }
        </div>
    )
}