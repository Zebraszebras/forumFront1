import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

const AskPage = () => {
  const router = useRouter();
  const [question, setQuestion] = useState("");

  const postQuestion = async () => {
    const response = await axios.post("/question/question", {
      question_text: question,
    });
    router.push(`/question/${response.data.question._id}`);
  };

  return (
    <>
    <div className={styles.askQuestion}>
      <textarea className={styles.textarea}
        value={question}
        onInput={(event) => setQuestion(event.target.value)}
      />
      <button className={styles.postQuestionButton} onClick={postQuestion}>Post Question</button>
      </div>
    </>
  );
};

export default AskPage;
