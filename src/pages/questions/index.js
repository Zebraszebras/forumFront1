import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:8082/question/questions');
        setQuestions(response.data.questions);
      } catch (error) {
        console.error('Failed to fetch questions:', error);
        alert('Failed to fetch questions. Please try again later.');
      }
    };

    fetchQuestions();
  }, []);

  return (
    <>
      <div>Questions</div>
      {questions.map((question) => (
        <div key={question._id}>
          <Link href={`/question/${question._id}`}>
            {question.question_text}
          </Link>
        </div>
      ))}
    </>
  );
};

export default QuestionsPage;

