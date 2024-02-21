import React from 'react'
import "./Sidebar.css"
import { CiEdit } from "react-icons/ci";

import { MdOutlineWhatshot } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";

import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const Sidebar = () =>
{
    return (
        <div className='Sidebar'>
            <div className="Sidebar__header">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                <div className="Sidebar__headerRights">

                    <IconButton>
                        <CiEdit />
                    </IconButton>

                    <IconButton>
                        <IoFilterSharp />
                    </IconButton>

                    <IconButton>
                        <MdOutlineWhatshot />
                    </IconButton>
                </div>
            </div>

            <div className='search__box'>
                <input />
            </div>

            <div className='user__contact'>
                <Avatar className=' m-2' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className='contact__data'>
                    <div className='contact__header'>
                        <p>Mohamed L</p>
                        <p className='time text-truncate'>11:04 PM</p>
                    </div>
                    <p>dmaklsfklsdfjlkjS</p>
                </div>
            </div>



            <div className='user__contact'>
                <Avatar className=' m-2' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className='contact__data'>
                    <div className='contact__header'>
                        <p>Mohamed L</p>
                        <p className='time text-truncate'>11:04 PM</p>
                    </div>
                    <p>dmaklsfklsdfjlkjS</p>
                </div>
            </div>



            <div className='user__contact'>
                <Avatar className=' m-2' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className='contact__data'>
                    <div className='contact__header'>
                        <p>Mohamed L</p>
                        <p className='time text-truncate'>11:04 PM</p>
                    </div>
                    <p>dmaklsfklsdfjlkjS</p>
                </div>
            </div>



            <div className='user__contact'>
                <Avatar className=' m-2' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className='contact__data'>
                    <div className='contact__header'>
                        <p>Mohamed L</p>
                        <p className='time text-truncate'>11:04 PM</p>
                    </div>
                    <p>dmaklsfklsdfjlkjS</p>
                </div>
            </div>

        </div >
    )
}

export default Sidebar
