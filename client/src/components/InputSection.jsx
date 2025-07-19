import React, { useState } from 'react';

const InputSection = ({ onResponse, setIsLoading }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) {
      onResponse(null, 'Please enter a coding question first!');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/ai/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();
      onResponse(data.answer);
    } catch (err) {
      onResponse(null, err.message);
    }
  };

  return (
    <div className="card input-section">
      <div className="card-header">
        <h2><i className="fas fa-question-circle" style={{ color: '#00d4ff' }}></i> Ask a Coding Question</h2>
      </div>
      <div className="card-body">
        <div className="instructions">
          <i className="fas fa-info-circle"></i>
          <div>
            <p><strong>How to use:</strong> Ask any coding-related question in any programming language. The AI is specialized to help with coding problems and concepts.</p>
            <p>For non-coding questions, responses may be unpredictable!</p>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="questionInput">
            <i className="fas fa-terminal"></i>
            Your Coding Question
          </label>
          <textarea 
            id="questionInput" 
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., Explain closures in JavaScript, How to implement binary search in Python, What is recursion?"
          ></textarea>
        </div>
        
        <button id="askButton" onClick={handleSubmit}>
          <i className="fas fa-paper-plane"></i>
          Ask Coding Instructor
        </button>
      </div>
    </div>
  );
};

export default InputSection;