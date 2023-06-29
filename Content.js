import React from 'react'
import { useState } from 'react';

const Content = () => {

    useState();
    useState();
    useState();
    useState();
    useState();
    useState();

    const [value,setValue] = useState("a")

    function changeName(){
        const names = ['a','b','c'];
        const change = Math.floor(Math.random()*3);
        setValue(names[change]);
      }

      const namee = () => {
        return console.log("welcome to the page");
      }
      const [count,setCount] = useState(0);
      const [name, setName] = useState(() => namee());
      
      const handleClick = (e) => {
        console.log(e.target.innerText);
      }

      const handleClick2 = (value) =>{
        console.log(`Thanks for the double click ${value}`)
      }

      const incremenctFunction = () => {
        setCount((count)=>{ return count + 1});
        setCount((count)=>{ return count + 1});
        setCount((count)=>{ return count + 1});
      }

      const decrementFunction = () => {
        setCount((count)=>{return count-1})
        setCount((count)=>{return count-1})
        setCount((count)=>{return count-1})
      }

  return (
    <main>
        <p>Let's play the chat {value}</p>
        <button onClick={changeName}>Subscribe</button>
        <button onClick={incremenctFunction}>+</button>
        <button>{count}</button>
        <button onClick={decrementFunction}>-</button>
    </main>
  )
}

export default Content