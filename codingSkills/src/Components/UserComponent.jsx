function WelcomeUser(){
    return (
        <div>
            <h1>Hello User</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse incidunt nemo beatae necessitatibus magni est excepturi doloremque quasi cum eveniet.</p>
        </div>
    )
}



export function Login(){
    return (
        <div>
            <h3>Logged in succesfully!!!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto enim non dolores optio consequuntur. Repellendus deserunt quas voluptate at ipsum? Quasi atque accusantium veniam non, corporis facilis sunt totam ducimus.</p>
        </div>
    )

}

export function Profile(){
    return(
            <div>
                <h3>Profile of User</h3>
                <p>Profile Pic</p>
            </div>
    )
}



export const UserName="Harish"
export default WelcomeUser