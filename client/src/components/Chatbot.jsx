    import React, { useState } from 'react';
    import axios from 'axios';
    import { Send, MessageCircle, Smile, X } from 'lucide-react';
    import { gsap } from 'gsap';

    const ChatBot = () => {
        const [userInput, setUserInput] = useState('');
        const [messages, setMessages] = useState([]);
        const [loading, setLoading] = useState(false);
        const [isOpen, setIsOpen] = useState(false);

        const handleSubmit = async (event) => {
            event.preventDefault();
            if (userInput.trim() === '') return;

            setMessages([...messages, { sender: 'user', text: userInput }]);
            setLoading(true);

            try {
                const response = await axios.post('http://localhost:5000/chat', { userInput });
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

        const scrollToBottom = () => {
            const chatBox = document.getElementById("chatBox");
            gsap.to(chatBox, { scrollTop: chatBox.scrollHeight, duration: 0.5 });
        };

        return (
            <div>
                {/* Floating Button */}
                <button
                    className="z-10 fixed bottom-4 right-4 bg-black text-white p-4 rounded-full shadow-lg hover:bg-white hover:text-black border-2 border-white transition-all"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
                </button>

                {/* Chat Popup */}
                {isOpen && (
                    <div className="fixed bottom-16 right-4 w-85 bg-white p-4 rounded-lg shadow-2xl border-2 border-black z-10">
                        <h1 className="text-xl font-bold text-center mb-4 text-black">Chatbot</h1>

                        <div id="chatBox" className="max-h-60 overflow-y-scroll mb-4 p-2 bg-gray-100 rounded-lg border border-black">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
                                >
                                    <div className={`p-2 inline-block rounded-lg ${message.sender === 'user' ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}>
                                        <strong>{message.sender === 'user' ? 'You' : 'Bot'}:</strong> {message.text}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="text-center">
                                    <Smile className="inline-block animate-pulse text-gray-500" size={24} />
                                </div>
                            )}
                        </div>

                        <form onSubmit={handleSubmit} className="flex space-x-2">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 p-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <button type="submit" className="p-2 bg-black rounded-lg text-white hover:bg-white hover:text-black border-2 border-black mr-2">
                                <Send size={20} />
                            </button>
                        </form>
                    </div>
                )}
            </div>
        );
    };

    export default ChatBot;
