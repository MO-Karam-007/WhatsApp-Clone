import React, { useState } from 'react'
import "./Chat.css"
import Avatar from '@mui/material/Avatar';
import { FaPhoneFlip } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

import { FaVideo } from "react-icons/fa6";
import { IoIosAttach } from "react-icons/io";

import { IconButton } from '@mui/material';
import axios from '../url/axios.js'
const Chat = ({ msg }) =>
{
    const [input, setInput] = useState('')
    const onClickTest = async (e) =>
    {
        e.preventDefault()
        await axios.post('/v1/msg', {
            message: input,
            time: "19:00",
            recived: !msg.recived,
            user: "Demo App"
        })

        setInput("")

    }


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
                                <h2>Mo Karam</h2>
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


                        {msg.length ? msg.map(msg =>
                        {
                            return <>
                                <div className={`sended__msg__component ${msg.recived && `recived__msg__component`}`}>
                                    <p className={`recived__msg ${msg.recived && `sended_msg`}`}>
                                        <span className='name__of__chat'>{msg.user}</span>
                                        {msg.message}
                                        <span className='chat__time'>{msg.time}</span>
                                    </p>
                                </div>

                            </>
                        }) : <h1>no msgs</h1>}

                    </div>
                </div>

                <div className='sending__component'>
                    <form>
                        <div>
                            <MdEmojiEmotions />
                            <IoIosAttach />
                        </div>
                        <input onChange={(e) => setInput(e.target.value)} value={input} placeholder='Type a message' type="text" />
                        <button type="submit" onClick={onClickTest}>
                            <IoMdSend />
                        </button >
                    </form>
                </div>

            </div>

        </>
    )
}

export default Chat
