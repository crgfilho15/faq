import React, { useState } from 'react'
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import './Home.css'

export default function Home() {
    const [ pressed, setPressed ] = useState(-1)
    const faq = [
        {title:"Lorem ipsum dolor sit amet?", content:"Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium."},
        {title:"Dignissimos sequi architecto?", content:"Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque."},
        {title:"Voluptas praesentium facere?", content:"Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque."}
    ]

    function Pressed(index) {
        setPressed(index)

        if(pressed === index) {
            setPressed(-1)
        }
    }
    
  return (
    <div className='home'>
        <h1 className='title'>FAQ HELP SECTION</h1>

        <div className='home'>
         {
          faq.map((item, index) => {
            return(
            <div className='faq'>
                <button className= {pressed === index? 'button light' : 'button dark'} onClick={()=> Pressed(index)}>
                    {item.title}
                    {pressed === index ? <BiMinus color={"#fff"} size={20}/> : <BsPlusLg color={"#fff"} size={20}/>}
                </button>

                <div className = {pressed === index ? 'content flex' : 'content none'}>{item.content} </div>
            </div>
            )
          })
         }
       </div>

    </div>
  )
}