import { useState } from 'react';
import ChatWindow from './ChatWindow';

const ChatApp = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (text) => {
        setMessages([...messages, { text, sender: 'customer' }]);
    };

    return (
        <div className="h-screen flex  bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md h-3/4">
                <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
};

export default ChatApp;
