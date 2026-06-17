import { useState } from "react";

export const UserDashBoard = ({isPremium}) =>{

    const [credits, setCredits] =  useState(100);
    if(!isPremium)
    {
        return<div>Upgrade to premium to see credits</div>
    }
    return <div>
        <p>Credits : {credits}</p>
        <button onClick={() => setCredits(0)}>Spend all Credits</button>
    </div>
}