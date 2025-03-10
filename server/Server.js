import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load API key from environment variables
const API_KEY = process.env.GOOGLE_API_KEY;
const API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';

// Ensure API key is set
if (!API_KEY) {
    console.error("⚠️ GOOGLE_API_KEY is not set. Check your .env file.");
    process.exit(1);
}

// Chatbot API endpoint
app.post('/chat', async (req, res) => {
    try {
        const { userInput } = req.body;
        if (!userInput) {
            return res.status(400).json({ error: 'User input is required' });
        }

        const response = await axios.post(
            `${API_URL}?key=${API_KEY}`,
            {
                contents: [{ parts: [{ text: userInput }] }]
            },
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );

        // Extract chatbot response
        const chatbotReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'I am not sure how to respond.';
        res.json({ message: chatbotReply });

    } catch (error) {
        console.error('❌ API Error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Chatbot API request failed' });
    }
});

// Start server
app.listen(port, () => console.log(`✅ Server running at http://localhost:${port}`));
