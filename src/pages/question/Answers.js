import AnswerCard from "./AnswerCard";
import styles from "./answers.module.css";

const Answers = (props) => {
  const { answers } = props;

  const onDeleted = (answer) => {
    if (props.onDeleted) {
      props.onDeleted(answer);
    }
  };

  if (!answers || !answers.length) {
    return <div className={styles.noAnswers}> No answers</div>;
  } else {
    return (
      <>
      <div className={styles.answersWrapper}>
        {answers.map((a) => (
          <AnswerCard answer={a} onDeleted={() => onDeleted(a)} key={a._id} />
        ))}
        </div>
      </>
    );
  }
};

export default Answers;
