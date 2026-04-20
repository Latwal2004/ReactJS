import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MyApp from './App.jsx';

//creating custom method 
// function MyApp()
// {
//     return (
//         <div>
//             <h1>Custom App!</h1>
//         </div>
//     )
// }

// const ReactElement = {
//     type:'a',
//     props:{
//         href:'https://www.bing.com/search?filters=ufn%3a%22Google+Search%22+sid%3a%220edabf9c-4239-7a77-3fd7-c2709549473e%22&asbe=AS&qs=MB&pq=google&sk=CSYN1UAS7LS2AS8MT1&sc=25-6&pglt=395&q=google+search&cvid=39e7a925c3ab4f598f500a1a75d50a16&gs_lcrp=EgRlZGdlKgYIBBAuGEAyCQgAEEUYQRj5BzIGCAEQRRg7MgYIAhAuGEAyBggDEAAYQDIGCAQQLhhAMgYIBRAuGEAyBggGEEUYQTIGCAcQRRg8MgYICBBFGEHSAQkxMjQxM2owajeoAgCwAgA&FORM=ANNTA1&ucpdpc=UCPD&PC=SCOODB',
//         target:'_blank'
//     },
//     children : 'click me to visit google'
// }

// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit me</a>
// )




// Understanding the syntax for creating and rendering React elements 
// React.createElement(tag, props, children)
// const title = React.createElement(
//   "h2",
//   { id: "heading" },
//   "Welcome to React"
// );
//creating variable
// const anotherUser = " chai aur react"
// const reactElement  = React.createElement(
//     'a',//tag want to create
//     {href:"https://google.com",target:'_blank'},//→ properties (props), like className, id, style
//         'click me to visit google',//content inside the tag
//using variable         
// anotherUser
// )


//Multiple children example:
// const parent  = React.createElement(
//     "div",
//     {},
//     [
//         React.createElement("h1", "Heading"),
//         React.createElement("p", "Paragraph")
//     ]
// )

// Understanding how to use createElement to inject variables in JSX in React
// You can also insert variables using React.createElement().

const username = "Harish";
// const element = React.createElement(
//   "h1",
//   { id: "heading" },
//   `Hello ${username}`//javascript
// //   username//jsx
// );
const element = <h1>Hello {username}</h1>;//jsx

createRoot(document.getElementById('root')).render(
// anotherElement
// title
// parent
// element
// reactElement
//  <MyApp/>    
    <App />
)
