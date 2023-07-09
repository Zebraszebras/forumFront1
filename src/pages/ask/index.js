import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

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
      <textarea
        value={question}
        onInput={(event) => setQuestion(event.target.value)}
      />
      <button onClick={postQuestion}>Post Question</button>
    </>
  );
};

export default AskPage;
