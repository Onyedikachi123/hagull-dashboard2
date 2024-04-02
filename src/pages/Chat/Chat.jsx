import { useState } from 'react';
import ChatWindow from './ChatWindow';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (text) => {
        if (typeof text === 'string' && ['vendor', 'customer'].includes('customer')) {
            setMessages([...messages, { text, sender: 'customer' }]);
        }
    };

    return (
        <div className="h-screen flex  bg-gray-100 p-14">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full ">
                <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
};

export default Chat;
