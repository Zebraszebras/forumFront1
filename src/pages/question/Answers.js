import AnswerCard from "./AnswerCard";

const Answers = (props) => {
  const { answers } = props;

  const onDeleted = (answer) => {
    if (props.onDeleted) {
        props.onDeleted(answer);
    }
  }

  if (!answers || !answers.length) {
    return <div>No answers</div>;
  } else {
    return (
      <>
        {answers.map((a) => (
          <AnswerCard answer={a} onDeleted={() => onDeleted(a)} key={a._id} />
        ))}
      </>
    );
  }
};

export default Answers;
