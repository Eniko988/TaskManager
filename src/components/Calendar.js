import React, { useContext, useState } from 'react'
import {Calendar2EventFill,CaretUp} from 'react-bootstrap-icons'
import {calendarItems} from '../constants'
import { TodoContext } from '../context'
import {useSpring, animated} from 'react-spring'

function Calendar(){
//STATE
const [showMenu, setShowMenu] = useState(true)

//CONTEXT
const{setSelectedProject} = useContext(TodoContext)

//ANIMATION
const spin = useSpring({
    transform : showMenu ? 'rotate(0deg)' : 'rotate(180deg)',
    config : {friction : 10}
})

const menuAnimation = useSpring({
    display : showMenu ? 'block' : 'none',
    lineHeight : showMenu ? 1.2 : 0
})
    return (
        <div className='Calendar'>
           <div className='header'>
            <div className='title'>
                <Calendar2EventFill size="18" color="#59331D"/>
               <p>Calendar</p>
            </div>
            <animated.div 
            style={spin}
            onClick={()=>setShowMenu(!showMenu)} 
            className='buttons'>
                <span>
                    <CaretUp size="20" color="#000000"/>
                </span>
            </animated.div>
           </div>
           <animated.div style = {menuAnimation} className="items">
            {
                calendarItems.map(item =>
                    <div className='item'
                     key={item}
                     onClick = {()=>setSelectedProject(item)}
                     >
                        {item}
                    </div>
                   )
            }
           </animated.div>
        </div>
    )
}

export default Calendar