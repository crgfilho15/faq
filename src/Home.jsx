import React, { useState } from 'react'
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import './Home.css'

export default function Home() {
    const [ pressed, setPressed ] = useState(false)
    const faq = [
        {title:"Lorem ipsum dolor sit amet?", content:"Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium."},
        {title:"Dignissimos sequi architecto?", content:"Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque."},
        {title:"Voluptas praesentium facere?", content:"Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque."}
    ]
    
  return (
    <div className='home'>
        <h1 className='title'>FAQ HELP SECTION</h1>

        <div className='home'>
         {
          faq.map((item, index) => {
            return(
            <div className='faq'>
                <button className='button' onClick={()=> setPressed(!pressed)} style={{backgroundColor: pressed? "#105057" : "#008593"}}>
                {item.title}
                {pressed? <BiMinus color={"#fff"}/> : <BsPlusLg color={"#fff"} size={10}/>}
                </button>

                <div className='content' style={{display: pressed? "flex" : "none"}}>{item.content} </div>
            </div>
            )
          })
         }
       </div>

    </div>
  )
}