import React, { useState } from 'react';
import axios from 'axios';
import { Send, Smile } from 'lucide-react';
import { gsap } from 'gsap';

const ChatBot = () => {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userInput.trim() === '') return;

        // Add user's message to the chat
        setMessages([...messages, { sender: 'user', text: userInput }]);
        setLoading(true);

        try {
            // Send message to backend (Express API)
            const response = await axios.post('http://localhost:5000/chat', { userInput });

            // Add chatbot's response to the chat
            setMessages([...messages, { sender: 'user', text: userInput }, { sender: 'bot', text: response.data.message }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages([...messages, { sender: 'bot', text: 'Sorry, something went wrong.' }]);
        } finally {
            setUserInput('');
            setLoading(false);
            scrollToBottom();
        }
    };

    // Scroll to the bottom after a new message
    const scrollToBottom = () => {
        const chatBox = document.getElementById("chatBox");
        gsap.to(chatBox, { scrollTop: chatBox.scrollHeight, duration: 0.5 });
    };

    // Animation effect for incoming messages
    const animateMessage = (index) => {
        gsap.fromTo(`#message-${index}`, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 });
    };

    return (
        <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-xl">
            <h1 className="text-2xl font-bold text-center mb-4">Chatbot</h1>
            <div id="chatBox" className="max-h-96 overflow-y-scroll mb-6 p-4 bg-gray-50 rounded-lg border border-gray-300">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        id={`message-${index}`}
                        className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
                        onLoad={() => animateMessage(index)}
                    >
                        <div className={`p-2 inline-block rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                            <strong>{message.sender === 'user' ? 'You' : 'Bot'}:</strong> {message.text}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="text-center">
                        <div className="animate-pulse">
                            <Smile className="inline-block animate-pulse text-gray-500" size={24} />
                        </div>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button type="submit" className="p-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600">
                    <Send size={20} />
                </button>
            </form>
        </div>
    );
};

export default ChatBot;
