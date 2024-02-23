import React from 'react'
import "./Chat.css"
import Avatar from '@mui/material/Avatar';
import { FaPhoneFlip } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

import { FaVideo } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosAttach } from "react-icons/io";

import { IconButton } from '@mui/material';
const Chat = () =>
{
    return (
        <>
            <div className='chat'>
                <div className='wrapper'>


                    <div className='chat__header'>
                        <div className='user__data'>
                            <div className='avater'>
                                <Avatar />
                            </div>
                            <div className='chat__info'>
                                <h2>Name of user</h2>
                                <p>2 hours ago</p>
                            </div>
                        </div>
                        <div className="Sidebar__headerRights">

                            <IconButton>
                                <FaVideo />
                            </IconButton>

                            <IconButton>
                                <FaPhoneFlip />
                            </IconButton>

                            <IconButton>
                                <FaSearch />
                            </IconButton>
                        </div>
                    </div>

                    <div className='chat__body'>


                        <div className='recived__msg__component'>
                            <Avatar />
                            <p className='recived__msg'>

                                <span className='name__of__chat'>Sister</span>
                                This is my message
                                <span className='chat__time'>{new Date().toLocaleTimeString()}</span>
                            </p>
                        </div>


                        <div className='sended__msg__component'>
                            <p className='sended__msg'>
                                <span className='name__of__chat'>Sister</span>
                                This is my message
                                <span className='chat__time'>{new Date().toLocaleTimeString()}</span>
                            </p>
                        </div>

                        <div className='sended__msg__component'>
                            <p className='sended__msg'>
                                <span className='name__of__chat'>Sister</span>
                                This is my message
                                <span className='chat__time'>{new Date().toLocaleTimeString()}</span>
                            </p>
                        </div>

                        <div className='recived__msg__component'>
                            <Avatar />
                            <p className='recived__msg'>

                                <span className='name__of__chat'>Sister</span>
                                This is my message
                                <span className='chat__time'>{new Date().toLocaleTimeString()}</span>
                            </p>
                        </div>

                    </div>
                </div>

                <div className='sending__component'>
                    <form>
                        <div>
                            <MdEmojiEmotions />
                            <IoIosAttach />
                        </div>
                        <input placeholder='Type a message' />
                        <button>
                            <IoMdSend />
                        </button>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Chat
