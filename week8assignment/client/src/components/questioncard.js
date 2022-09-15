import { useState } from "react";

const QuestionCard = (props) => {
  const [answerOptions, setAnswerOptions] = useState([1, 2, 3, 4]);

  //incorrect_answers[0]
  //correct_answer

  return (
    <div className={"question-section"}>
      <div
        className="question-text"
        dangerouslySetInnerHTML={{ __html: props.question.question }}
      />
      <div className="answer-section">
        {answerOptions.map((answer, index) => {
          return (
            <button
              key={index}
              value={answer}
              dangerouslySetInnerHTML={{
                __html: props.question.correct_answer, 
                
              }}

            >
              
             {/* {answer} */}
            </button>
          );
        })}

        {/* <button type="submit">Answer 1</button> */}
      </div>
      <div>
        {/* <button type="submit">Answer 2</button>
        <button type ="submit">Answer 3</button>
        <button type="submit"> Answer 4</button> */}
      </div>
    </div>
  );
};

export default QuestionCard;
