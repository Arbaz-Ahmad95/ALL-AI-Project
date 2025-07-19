import React from 'react';

const formatAnswer = (text) => {
  if (!text) return text;
  
  // Format code blocks
  let formattedText = text.replace(
    /(```[\s\S]*?```)|(`[^`]+`)/g, 
    (match) => {
      if (match.startsWith('```')) {
        return `<pre><code>${match.replace(/```/g, '')}</code></pre>`;
      } else {
        return `<code>${match.replace(/`/g, '')}</code>`;
      }
    }
  );
  
  // Convert line breaks to paragraphs
  return formattedText.split('\n\n').map((paragraph, i) => (
    paragraph.trim() && <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
  ));
};

const OutputSection = ({ output, isLoading, error }) => {
  const defaultOutput = (
    <>
      <p><strong>Welcome to Coding Instructor AI!</strong> I'm here to help you with any programming questions you have.</p>
      <p>Ask me about:</p>
      <ul>
        <li>Programming concepts (OOP, recursion, closures)</li>
        <li>Language-specific questions (JavaScript, Python, Java)</li>
        <li>Algorithm explanations</li>
        <li>Code debugging</li>
        <li>Best practices</li>
      </ul>
      <p>Try asking: <code>"Explain how promises work in JavaScript"</code> or <code>"Show me a Python implementation of quicksort"</code></p>
    </>
  );

  return (
    <div className="card output-section">
      <div className="card-header">
        <h2><i className="fas fa-graduation-cap" style={{ color: '#10b981' }}></i> Instructor's Response</h2>
      </div>
      <div className="card-body">
        {isLoading && (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Analyzing your question and preparing the best explanation...</p>
          </div>
        )}
        
        <div className="output-container">
          <div id="outputArea">
            {error ? (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>
                {error}
              </div>
            ) : output ? (
              formatAnswer(output)
            ) : (
              defaultOutput
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputSection;