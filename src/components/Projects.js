import React, {useContext, useState} from 'react'
import AddNewProject from './AddNewProject'
import Project from './Project'
import {LightbulbFill, PencilFill,CaretUp} from 'react-bootstrap-icons'
import { TodoContext } from '../context';
import {useSpring, animated} from 'react-spring'

function Projects(){

    const [showMenu,setShowMenu] = useState(true);
    const [edit, setEdit] = useState(false);

    const pencilColor = edit ? "#1EC94C" : "#000000"
     
    const {projects} = useContext(TodoContext)

    //ANIMATION
const spin = useSpring({
    transform : showMenu ? 'rotate(0deg)' : 'rotate(180deg)',
    config : {friction : 10}
})

const menuAnimation = useSpring({
    display : showMenu ? 'block' : 'none',
    lineHeight : showMenu ? 1.2 : 0
})
    
    /*const projects = [
        {id: 1, name: "personal", numOfTodos : 0},
        {id: 2, name: "work", numOfTodos : 1},
        {id: 3, name: "other", numOfTodos : 2},
    ]
    */

    return (
        <div className='Projects'>
            <div className='header'>
                <div className='title'>
                 <LightbulbFill size="18" color='#59331D'/>
                 <p>Projects</p>
                </div>
                <div className='btns'>
                  {
                    showMenu && projects.length > 0 &&
                    <span className ='edit'onClick={ () => setEdit(edit => !edit)}>
                    <PencilFill  size="15" color={pencilColor} />
                    </span>
                  }
                    <AddNewProject/>
                    <animated.span 
                    className='arrow'
                    onClick={()=>setShowMenu(!showMenu)}
                    style={spin}
                    >
                        <CaretUp size="20" color="#000000"/>
                    </animated.span>
                </div>
            </div>
            <animated.div style = {menuAnimation} className='items'>
            {
                    projects.map( project=>
                        <Project
                        project = {project}
                        key = {project.id}
                        edit = {edit}
                        />
                        )
            }
            </animated.div>
        </div>
    )
}

export default Projects