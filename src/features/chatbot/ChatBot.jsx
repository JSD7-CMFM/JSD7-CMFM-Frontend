import React, { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!message.trim()) return;
    const newChat = [...chat, { user: 'user', message }];
    setChat(newChat);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:3000/chat', { message });
      setChat([...newChat, { user: 'bot', message: response.data.reply }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      <button onClick={toggleChat} className="bg-blue-500 text-white p-3 rounded-full shadow-lg">
        Chat
      </button>
      {isOpen && (
        <div className="fixed bottom-16 right-5 bg-white border border-gray-300 shadow-lg rounded-lg w-80 max-h-96 flex flex-col">
          <div className="flex justify-between items-center p-3 border-b border-gray-300">
            <h2 className="text-lg font-bold">ChatBot</h2>
            <button onClick={toggleChat} className="text-red-500">&times;</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto">
            {chat.map((chatMessage, index) => (
              <div key={index} className={chatMessage.user === 'bot' ? 'text-left' : 'text-right'}>
                <p className={chatMessage.user === 'bot' ? 'bg-gray-200 p-2 rounded-lg inline-block' : 'bg-blue-200 p-2 rounded-lg inline-block'}>
                  {chatMessage.message}
                </p>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-300 flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-lg"
              placeholder="Type a message..."
              onKeyPress={(e) => {
                if (e.key === 'Enter') sendMessage();
              }}
            />
            <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-lg ml-2">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
