import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Answers from "./Answers";
import AnswerQuestion from "./AnswerQuestion";
import userModel from "@/models/userModel";
import styles from "./[id].module.css";

const QuestionPage = () => {
  const router = useRouter();
  const userId = userModel.id;
  const questionId = router.query.id;
  const [loaded, setLoaded] = useState(false);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState(null);

  const fetchAnswers = async () => {
    const response = await axios.get(
      `/question/questions/${questionId}/answers`
    );
    setAnswers(response.data);
  };

  useEffect(() => {
    if (!questionId) {
      return;
    }

    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`/question/questions/${questionId}`);
        setQuestion(response.data.question);
      } catch (error) {
        console.error("Failed to fetch question:", error);
      }
    };

    const fetchAll = async () => {
      await Promise.all([fetchQuestion(), fetchAnswers()]);
      setLoaded(true);
    };
    fetchAll();
  }, [questionId]);

  const reloadAnswers = async () => {
    setLoaded(false);
    await fetchAnswers();
    setLoaded(true);
  };

  const handleDeleteQuestion = async () => {
    try {
      await axios.delete(`/question/question/${questionId}`);
      console.log("Question deleted successfully");
      router.push(`/`);
      
    } catch (error) {
      console.error("Failed to delete question:", error);
      
    }
  };

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className={styles.questionWrapper}>
      <div className={styles.questionText}> 
      Question: {question.question_text}</div>
      {userId === question.asked_by && (
        <div>
          <button onClick={handleDeleteQuestion}>Delete Question</button>
        </div>
      )}
      <Answers answers={answers} onDeleted={reloadAnswers} />
      <AnswerQuestion questionId={questionId} onAnswered={reloadAnswers} />
      </div>
    </>
  );
};

export default QuestionPage;
