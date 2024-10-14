import React from 'react'
import "./FloatingChatButton.css"

const FloatingChatButton = () => {
    const openChatLinkInNewTab = () => {
        window.open('https://wa.me/+5214929496676', '_blank');
    }
    return (
        <button
            className='btn floating_chat_icon'
            onClick={openChatLinkInNewTab}
        >
            <span className='internal'>
                <img
                    width={25}
                    height={25}
                    src='/assets/message.png'
                    alt='chat icon'
                />
            </span>

        </button>
    )
}

export default FloatingChatButton
