import React, { useState, useRef } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const chatBoxRef = useRef(null);
  const initialPosition = useRef({ x: 0, y: 0, width: 0, height: 0 });

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

  const handleMouseDown = (e) => {
    e.preventDefault();
    if (chatBoxRef.current) {
      const chatBox = chatBoxRef.current;
      initialPosition.current = {
        x: e.clientX,
        y: e.clientY,
        width: chatBox.offsetWidth,
        height: chatBox.offsetHeight,
      };
    }
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (chatBoxRef.current) {
      const chatBox = chatBoxRef.current;
      const deltaX = e.clientX - initialPosition.current.x;
      const deltaY = e.clientY - initialPosition.current.y;

      const newWidth = initialPosition.current.width - deltaX;
      const newHeight = initialPosition.current.height - deltaY;

      if (newWidth > 200) {
        chatBox.style.width = `${newWidth}px`;
      }
      if (newHeight > 200) {
        chatBox.style.height = `${newHeight}px`;
      }
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="fixed bottom-5 right-5">
      <button onClick={toggleChat} className="bg-blue-500 text-white p-3 rounded-full shadow-lg">
        Chat
      </button>
      {isOpen && (
        <div
          ref={chatBoxRef}
          className="fixed bottom-16 right-5 bg-white border border-gray-300 shadow-lg rounded-lg w-80 max-h-96 flex flex-col min-w-[200px] min-h-[200px]"
          style={{ resize: 'both', overflow: 'auto', position: 'absolute' }}
        >
          <div className="absolute top-0 left-0 w-3 h-3 bg-gray-500 cursor-nwse-resize" onMouseDown={handleMouseDown}></div>
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
