import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Sidebar.css'
function SidebarChat()
{
    return (
        <>
            <div className='user__contact'>
                <div className='avatar'>
                    <Avatar className=' m-2' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <div className='contact__data'>
                    <div className='contact__header'>
                        <p>Mohamed L</p>
                        <p className='time text-truncate'>11:04 PM</p>
                    </div>
                    <p className='msg'>dmaklsfklsdfjlkjS</p>
                </div>
            </div>

        </>
    )
}

export default SidebarChat