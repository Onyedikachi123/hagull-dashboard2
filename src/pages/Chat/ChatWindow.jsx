import { useState } from 'react';
import PropTypes from 'prop-types';
import { Send } from 'lucide-react';

const ChatWindow = ({ messages, onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [search, setSearch] = useState('');
  const [filteredMessages, setFilteredMessages] = useState(messages);

  const handleSend = () => {
    if (message.trim() !== '') {
      onSendMessage({ text: message, sender: 'customer' });
      setMessage('');
    }
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
    const filtered = messages.filter((msg) =>
      msg.sender === 'customer' ? msg.text.toLowerCase().includes(searchText.toLowerCase()) : false
    );
    setFilteredMessages(filtered);
  };

  return (
    <div className="flex h-full">
      <div className="w-1/4 bg-gray-100 border-r border-gray-300">
        <div className="p-4 font-bold">Chats</div>
        <div className="px-4 pb-4">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search customers..."
          />
        </div>
        {filteredMessages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg bg-[#1B97B2] text-white my-2 mx-2 hover:bg-[#1695a3] cursor-pointer`}
          >
            {msg.sender === 'vendor' ? 'Vendor' : 'You'}: {msg.text}
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-2 mx-2 rounded-lg w-3/10 self-end ${
                msg.sender === 'vendor'
                  ? 'bg-[#1B97B2] text-white'
                  : 'bg-green-200'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex items-center p-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

ChatWindow.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      sender: PropTypes.oneOf(['vendor', 'customer']).isRequired,
    })
  ).isRequired,
  onSendMessage: PropTypes.func.isRequired,
};

export default ChatWindow;
