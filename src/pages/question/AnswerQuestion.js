import axios from "axios";
import { useState } from "react";
import styles from "./answerQuestion.module.css";

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
    <div className={styles.answerQuestionWrapper}>
      <textarea className={styles.textarea}
        placeholder="Write your answer..."
        value={answer}
        onInput={(event) => setAnswer(event.target.value)}
      />

      <button className={styles.postAnswerButton} onClick={postAnswer}>Post Answer</button>
      </div>
    </>
  );
};

export default AnswerQuestion;
