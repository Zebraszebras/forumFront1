import axios from "axios";
import userModel from "@/models/userModel";

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
      <div>
        <div>{answer.answer_text}</div>
        {userId === answer.answered_by && <button onClick={deleteAnswer}>Delete Answer</button>}
        <button onClick={likeAnswer}>Like</button>
        <button onClick={dislikeAnswer}>Dislike</button>
      </div>
    </>
  );
};

export default AnswerCard;
