import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const QuestionPage = () => {
  const router = useRouter();
  const questionId = router.query.id;
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`/question/questions/${questionId}`);
        setQuestion(response.data.question);
      } catch (error) {
        console.error('Failed to fetch question:', error);
      }
    };

    fetchQuestion();
  }, [questionId]);

  const handleDeleteQuestion = async () => {
    try {
      await axios.delete(`/question/question/${questionId}`);
      console.log('Question deleted successfully');
      // TODO: Handle the successful deletion, such as showing a success message or updating the UI
    } catch (error) {
      console.error('Failed to delete question:', error);
      // TODO: Handle the failed deletion, such as showing an error message or displaying an error modal
    }
  };

  const handleAnswerQuestion = () => {
    // Navigate to the answer page and pass the question ID as a query parameter
    router.push(`/answer/${questionId}`);
  };

  const handleViewAnsweredQuestions = () => {
    // Navigate to the answered questions page
    router.push('/questions/answered');
  };

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>Question: {question.question_text}</div>
      <div>
        <button onClick={handleDeleteQuestion}>Delete Question</button>
        <button onClick={handleAnswerQuestion}>Answer Question</button>
        <button onClick={handleViewAnsweredQuestions}>View Answered Questions</button>
      </div>
    </>
  );
};

export default QuestionPage;
