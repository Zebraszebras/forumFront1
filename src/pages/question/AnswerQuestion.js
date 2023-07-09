import axios from "axios";
import { useState } from "react";

const AnswerQuestion = (props) => {
  const { questionId } = props;
  const [answer, setAnswer] = useState("");
  const postAnswer = async () => {
    await axios.post(`/question/answer/${questionId}`, { answer_text: answer });
    if (props.onAnswered) {
        props.onAnswered();
    }
  };

  return (
    <>
      <textarea
        placeholder="Write your answer..."
        value={answer}
        onInput={(event) => setAnswer(event.target.value)}
      />

      <button onClick={postAnswer}>Post Answer</button>
    </>
  );
};

export default AnswerQuestion;
