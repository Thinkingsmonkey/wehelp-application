const Question = ({ question, answer }) => {
    return (
      <div className="question">
        <h2 className="question-title">
          {question} 
        </h2>
        <p className="question-answer">{answer}</p>
      </div>
    );
  };

export default Question;