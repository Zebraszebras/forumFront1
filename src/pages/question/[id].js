import { useRouter } from "next/router";

const questionPage = () => {
  const router = useRouter();
  return (
    <>
      <div>Question 1</div>
      <div>{router.query.id}</div>
    </>
  );
};

export default questionPage;
