import React from "react";
export const GreetingUser = ({ name = "Harish", msg = "Hello" }) => {

    return (
        <h2>{msg} {name}...</h2>
    )
}

export default GreetingUser