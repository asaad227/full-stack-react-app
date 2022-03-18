import React, {useState} from 'react';
import {useTransition, animated} from "react-spring"
import DataBase from '../DataBase';
import "./animation.css";

export default function Sample() {
const [items, setItems] = useState([]);
const transition = useTransition(items, {
    from:{x:-200, y:800, opacity: 0, width: 10, heiight: 10},
    enter: item => async (next)=>{
    await next ({y: item.y, opacity: 1, delay: item.delay});
    await next ({x: 0, width: 100, height: 100});},
    leave:{x: 200, y: 800, opacity: 0}
})


  return (
      <div>
    <div>
    <button onClick={()=>setItems(v=>v.length? []:
    [{y: -100, delay: 200}],
    [{y: -150, delay: 400}],
    [{y: -200, delay:600}
    ])}>{items.length? 'unmount': 'mount'}</button>
    </div>
    <div className='container'>
    {transition ((style, item)=>
    item? <animated.div style={style} className='item'><DataBase/></animated.div> : ''
    )}
    </div>
    </div>
  )
}
