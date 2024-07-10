import React, { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:3000/chat', { message: input });
      setMessages([...messages, { user: input, bot: response.data.reply }]);
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg"
        onClick={toggleModal}
      >
        Chat
      </button>
      {isOpen && (
        <div className="fixed bottom-16 right-5 bg-white border border-gray-300 shadow-lg rounded-lg w-80 max-h-96 flex flex-col">
          <div className="flex justify-between items-center p-3 border-b border-gray-300">
            <h2 className="text-lg font-bold">ChatBot</h2>
            <button className="text-gray-500" onClick={toggleModal}>X</button>
          </div>
          <div className="flex-1 overflow-y-auto p-3">
            {messages.map((msg, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm text-blue-600">User: {msg.user}</p>
                <p className="text-sm text-gray-800">Bot: {msg.bot}</p>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-300 flex items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-500 text-white p-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
