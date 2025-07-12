import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import api from '../api';

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSendMessage = async () => {
        if (!message.trim()) return;

        const newChatHistory = [...chatHistory, { role: 'user', content: message }];
        setChatHistory(newChatHistory);
        setMessage('');
        setLoading(true);

        try {
            const res = await api.post('/chatbot/', { message });
            const botMessage = res.data.choices[0].message.content;
            setChatHistory([...newChatHistory, { role: 'assistant', content: botMessage }]);
        } catch (error) {
            console.error('Failed to send message', error);
            setChatHistory([...newChatHistory, { role: 'assistant', content: 'Sorry, something went wrong.' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen p-4 bg-gray-100">
            <div className="flex-1 overflow-y-auto mb-4 p-4 bg-white rounded-lg shadow-md">
                {chatHistory.map((chat, index) => (
                    <div key={index} className={`my-2 p-2 rounded-lg ${chat.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-200'}`}>
                        <p className="text-sm"><strong>{chat.role === 'user' ? 'You' : 'Chatbot'}</strong></p>
                        <div className="prose">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{chat.content}</ReactMarkdown>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="form-input flex-1 mr-2"
                />
                <button onClick={handleSendMessage} className="btn btn-primary" disabled={loading}>
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </div>
        </div>
    );
};

export default Chatbot;