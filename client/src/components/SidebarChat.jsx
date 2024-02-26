import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Sidebar.css'
function SidebarChat()
{
    const users = [
        { name: "Mohamed Karam", time: "18:05", msg: "Hey Man" },
        { name: "50 Cent", time: "17:02", msg: "Will you be in da club, Yoooo? " },
        { name: "Walter White", time: "19:00", msg: "This is not meth 😂😂" },
        { name: "Wet Racoon", time: "18:08", msg: "I feel said, i don't have 7m dollars" },
        { name: "D.Trumb", time: "18:00", msg: "Am i Wet Racoon,💵💵" },
        { name: "Tayler Swift", time: "23:00", msg: "Selena Gomez is always farting carrots 😳😳😳" },
    ]
    return (
        <>
            <div className='user__contact'>

                {
                    users.map(user =>
                    {
                        return (

                            <div className="continer__user">
                                <div className='avatar'>
                                    <Avatar className=' m-2' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </div>
                                <div className='contact__data'>
                                    <div className='contact__header'>
                                        <p>{user.name}</p>
                                        <p className='time text-truncate'>{user.time}</p>
                                    </div>
                                    <p className='msg'>{user.msg}</p>
                                </div>
                            </div>

                        )
                    })

                }
            </div >

        </>
    )
}

export default SidebarChat