import React from "react";
function Card({ username, btnText , userNumber}) {
    // console.log("props", username)
    return (
        <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-3xl">
            <div>
                <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/36533817/pexels-photo-36533817.jpeg" />
            </div>
            <div class="flex flex-col items-center md:items-start ">
                <span class="text-2xl font-medium  text-green-500">{username}</span>
                <span class="font-medium text-sky-500 ">{btnText}</span>
                <span class="flex flex-col gap-2 font-medium text-gray-600 dark:text-gray-400">
                    <span>No. {userNumber}</span>
                    <span>2025</span>
                </span>
            </div>
        </div>

    )
}

export default Card