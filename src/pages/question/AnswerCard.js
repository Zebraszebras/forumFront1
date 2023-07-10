import axios from "axios";
import userModel from "@/models/userModel";
import styles from "./answerCard.module.css";

const AnswerCard = (props) => {
  const { answer } = props;
  const userId = userModel.id;

  const deleteAnswer = async () => {
    await axios.delete(`/answer/answer/${answer._id}`);
    if (props.onDeleted) {
      props.onDeleted();
    }
  };

  const likeAnswer = async () => {
    await axios.put(`/answer/answer/${answer._id}/like`);
  }

  const dislikeAnswer = async () => {
    await axios.put(`/answer/answer/${answer._id}/dislike`);
  }

  return (
    <>
      <div className={styles.answerCardWrapper}>
        <div className={styles.answerText}>{answer.answer_text}</div>
        {userId === answer.answered_by && <button className={styles.deleteAnswerButton} onClick={deleteAnswer}>Delete Answer</button>}
        <div className={styles.likeDislikeWrapper}>
        <button className={styles.likeButton} onClick={likeAnswer}>Like</button>
        <button className={styles.dislikeButton} onClick={dislikeAnswer}>Dislike</button>
       </div>
      </div>
    </>
  );
};

export default AnswerCard;
