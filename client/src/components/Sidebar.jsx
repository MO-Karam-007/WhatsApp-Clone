import React from 'react'
import "./Sidebar.css"
import { CiEdit } from "react-icons/ci";

import { MdOutlineWhatshot } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import SidebarChat from './SidebarChat';

const Sidebar = () =>
{
    return (
        <div className='Sidebar'>
            <div className="Sidebar__header">
                <Avatar className='avater' alt="Memy Sharp" src="/static/images/avatar/1.jpg" />
                <h3>What'</h3>
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
                <div className='searchbox_Container'>
                    <FaSearch />
                    <input placeholder='Search or start a new conversation' />
                </div>
            </div>

            <SidebarChat />



        </div >
    )
}

export default Sidebar
