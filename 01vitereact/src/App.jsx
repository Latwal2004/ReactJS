import { useState } from 'react'
// import Chai from './chai'
// import Header from './chai'
import Greeting from './chai'
import Mybutton from './chai'

//props by CodeEvalution
import { Welcome } from './welcome'
import { MultipleProps } from './MultipleProps'
//Destructuring
import { ProductRender } from './DestructuringProps'
//-->Props Scenarioes------>defaultProps
import { GreetingUser } from './DefaultProps'

import { UserInfo } from './UserInfo'
import { UserCard } from './UserCard'
import { CardWrapper } from './PassingJsAsChild'
function App() {



  //jsx by chai aurcode
  // const username = 'harish Latwal'
  //   return (
  //     <>
  //     <div>
  //       <Greeting name = "Harish"/>
  //       <Greeting name = "Nikhil"/>
  //       <Greeting name = "Ram"/>
  //       <Greeting name = "Shyam"/>
  //       </div>
  //     {/* <Header /> */}

  //     <h1>Welcome to vite react folder structure and project creation my name is {username}  and  here Index file is out source folder.</h1>
  //     {/* <Chai/> */}
  //     <p>In this We Will learned How We Can Create a New file and return something from it and then importing that file to app.jsx and second we will learned how we will return multiple html tags in app.jsx as by default it retun only a single tags</p>
  //     <p>Naming convention rules:- in function first letter must be capital recomended</p>
  //     <h2>Using fragments</h2>
  //     </>
  //   )
  // return(
  // <Mybutton/>
  // )



  //props by code evalution
  return (
    <>
      <Welcome name="Harish" alise="Harshu" />

     //multiple props passing
      <MultipleProps
        title="Gaming Laptop"
        price={129.99}
        inStock={true}
        category={["Laptop", "Computer", "Gaming"]}
      />

      //Destructuring
      <ProductRender
        title="Gaming Laptop"
        price={129.99}
        inStock={true}
        category={["Laptop", "Computer", "Gaming"]}
      />
      <ProductRender
        title="HP Laptop"
        price={50.99}
        inStock={false}
        category={["Laptop", "Word Computeing XL",]}
      />

    //defaultProps
      <GreetingUser name="Nikhil" msg="WakeUp...." />
      <GreetingUser name="Ansh" msg="WakeUp...." />
      <GreetingUser name="Ansh" />//it use name from propa and msg as default
      <GreetingUser />//it uses the default values

      <UserInfo name="Harish"
        age={23}
        city="Hoshiarpur"
        email={"harish@gmail.com"}
      />

      <CardWrapper title="user Profile">
        <p>Bruce Wayne</p>
        <p>Bruce@gmail.com</p>
        <p></p>
      </CardWrapper>
    </>
  )
}

export default App
