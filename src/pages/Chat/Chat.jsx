import { useState, useEffect } from 'react';
import ChatWindow from './ChatWindow';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Load saved messages from localStorage when the component mounts
        const savedMessages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
        setMessages(savedMessages);
    }, []);

    useEffect(() => {
        // Save messages to localStorage whenever the messages state changes
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);

    const handleSendMessage = (message) => {
        if (typeof message.text === 'string') {
            setMessages([...messages, message]);
        }
    };

    return (
        <div className="h-screen flex bg-gray-100 p-14">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
                <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
};

export default Chat;
