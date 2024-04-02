import { useState } from "react";
import PropTypes from "prop-types";
import { Send } from "lucide-react";

const ChatWindow = ({ messages, onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState(null);

  const handleSend = () => {
    if (message.trim() !== "") {
      onSendMessage({ text: message, sender: "customer" });
      setMessage("");
    }
  };

  const handleChatClick = (index) => {
    setActiveChat(index);
  };

  return (
    <div className="flex h-full">
      <div className="w-1/4 bg-gray-100 border-r border-gray-300">
        <div className="p-4 font-bold">Chats</div>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 hover:bg-gray-200 cursor-pointer ${
              activeChat === index ? "bg-gray-200" : ""
            }`}
            onClick={() => handleChatClick(index)}
          >
             {msg.sender === "vendor" ? "Vendor" : "You"}: {String(msg.text)}
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto p-4">
          {messages.map((msg, index) => {
            if (typeof msg.text !== 'string') {
              console.error('Expected msg.text to be a string', msg);
            }

            return (
              <div
                key={index}
                className={`p-2 my-2 rounded-lg ${
                  msg.sender === "vendor"
                    ? "bg-blue-200 self-end"
                    : "bg-green-200"
                }`}
              >
                {msg.text}
              </div>
            );
          })}
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
