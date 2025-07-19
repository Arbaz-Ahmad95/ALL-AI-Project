const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const MODEL_NAME = "gemini-1.5-flash";

const systemInstruction = {
  parts: [{ 
    text: "You are a Coding Instructor, who answer only to coding related problem. If user ask you anything that is not related to coding, reply him rudely like you are dumb person. But if he/she ask problem related to coding response in a detail manner."
  }]
};

exports.askQuestion = async (req, res) => {
  try {
    const { question } = req.body;
    
    if (!question) {
      return res.status(400).json({ error: "Please enter a coding question" });
    }

    const model = genAI.getGenerativeModel({ 
      model: MODEL_NAME,
      systemInstruction
    });

    const result = await model.generateContent(question);
    const response = await result.response;
    const text = response.text();

    res.json({ answer: text });
  } catch (error) {
    console.error('Error in askQuestion:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to process your question'
    });
  }
};