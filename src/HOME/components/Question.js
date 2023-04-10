import React from "react";
import { v4 as uuidv4 } from "uuid";
const Question = ({ question, answer }) => {
  const answerWithKeys = answer.map((element) => {
    if (React.isValidElement(element)) {
      return React.cloneElement(element, { key: uuidv4() });
    }
    return (
      <React.Fragment key={uuidv4()}>
        {element}
      </React.Fragment>
    );
  });

  return (
    <div className="question">
      <h2 className="question-title">{question}</h2>
      <div className="question-answer">
        {React.Children.toArray(answerWithKeys)}
      </div>
    </div>
  );
};

export default Question;

// const Question = ({ question, answer }) => {
//     return (
//       <div className="question">
//         <h2 className="question-title">
//           {question} 
//         </h2>
//         <div className="question-answer">{answer}</div>
//       </div>
//     );
//   };

// export default Question;