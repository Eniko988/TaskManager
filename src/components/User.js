import React from 'react'
import logo from "../img/logo1.png"

function User(){

    return (
        <div className='User'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
           <div className='info'>
            <p>Task Manager</p>
            <a href="#">Logout!</a>

            </div>
        </div>
    )
}

export default User