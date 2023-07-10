import axios from "axios";
import userModel from "@/models/userModel";
import styles from "./answerCard.module.css";

const AnswerCard = (props) => {
  const { answer } = props;
  const userId = userModel.id;
  const isLoggedIn = userModel.loggedIn;
  const alreadyReacted =
    answer.liked_by.indexOf(userId) > -1 ||
    answer.disliked_by.indexOf(userId) > -1;
  const likesCount = answer.liked_by.length;
  const dislikesCount = answer.disliked_by.length;

  const deleteAnswer = async () => {
    await axios.delete(`/answer/answer/${answer._id}`);
    if (props.onDeleted) {
      props.onDeleted(answer);
    }
  };

  const likeAnswer = async () => {
    await axios.put(`/answer/answer/${answer._id}/like`);
    if (props.onReacted) {
      props.onReacted(answer);
    }
  };

  const dislikeAnswer = async () => {
    await axios.put(`/answer/answer/${answer._id}/dislike`);
    if (props.onReacted) {
      props.onReacted(answer);
    }
  };

  return (
    <>
      <div className={styles.answerCardWrapper}>
        <div className={styles.answerText}>{answer.answer_text}</div>
        <div>
          Likes:{likesCount} <br /> Dislikes:{dislikesCount}
        </div>
        {userId === answer.answered_by && (
          <button className={styles.deleteAnswerButton} onClick={deleteAnswer}>
            Delete Answer
          </button>
        )}
        <div className={styles.likeDislikeWrapper}>
          {isLoggedIn && !alreadyReacted && (
            <button className={styles.likeButton} onClick={likeAnswer}>
              Like
            </button>
          )}
          {isLoggedIn && !alreadyReacted && (
            <button className={styles.dislikeButton} onClick={dislikeAnswer}>
              Dislike
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AnswerCard;
