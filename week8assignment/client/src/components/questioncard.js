import { useState, useEffect } from "react";

// makes special characters appear properly(shared by Linda)
function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

const QuestionCard = ({ question, count, setCount, rightAnswer }) => {
  const [answerOption, setAnswerOption] = useState("");

  //correct answer color
  const handleClick = (e) => {
    console.log(e.target.value, "answer selected");
    console.log(question.correct_answer, "right answer");

    if (e.target.value == question.correct_answer) {
      e.target.style.backgroundColor = "green";
      setAnswerOption("Correct");
      setCount((c) => c + 1);
      console.log(answerOption);
    } else {
      e.target.style.backgroundColor = "red";
      setAnswerOption("Correct Answer: " + question.correct_answer);
    }
  };

  //   //{answerOptions: ‘1’, setAnswerOptions: ‘a'}
  //   //incorrect_answers[0]
  //   //correct_answer

  //__________________________________________________________
  //randomizes which option is the correct answer
  // const randomAnswerPlacement = (arr, correct) => {
  //   const arrTwo = [...arr];//spread operator

  //   //random num between 0 and incorrect_answers
  //   const ranNum = Math.floor (Math.random()* arr.length)
  //   //correct_answer in a dif index
  //   arrTwo.splice(ranNum, 0, correct);
  //   return arrTwo;
  // };

  // // const ranNum = Math.floor(Math.random()*(3))
  // // question.incorrect_answers.splice(ranNum, 0, question.correct_answer)

  // //following code will reset the locations of both incorrect_answers and correct_answer
  // //this will happen after each question is answered.

  // useEffect(() =>{
  //   setAnswerOption(randomAnswerPlacement(question.incorrect_answers, question.correct_answer));
  //   rightAnswer(decodeHtml(question.correct_answer));
  // },[question]);

  //_________________________________________________________________________

  return (
    <div className={"question-section"}>
      <div className="question-text">{decodeHtml(question.question)}</div>
      <br></br>
      <div className="answer-section">
        {question.incorrect_answers.map((option, index) => {
          return (
            <button key={index} value={option} onClick={handleClick}>
              {decodeHtml(option)}
            </button>
          );
        })}

        {/* {wrongOptions.map((answer, index) => {
//           return (
//             <button
//               key={index}
//               value={answer}
//               dangerouslySetInnerHTML={{
//                 __html: props.question.incorrect_answers,
//               }}
//             ></button>
//           );
//         })} */}

        <button onClick={handleClick} value={question.correct_answer}>
          {decodeHtml(question.correct_answer)}
        </button>
      </div>
      <br></br>
      {answerOption}
    </div>
    //         {/* <button type="submit">Answer 1</button> */}
    //       </div>
    //       <div>
    //         {/* <button type="submit">Answer 2</button>
    //         <button type ="submit">Answer 3</button>
    //         <button type="submit"> Answer 4</button> */}
    //       </div>
    //     </div>
  );
};

export default QuestionCard;
