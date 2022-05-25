import { Modal } from "@nextui-org/react";
import { useState } from "react";
import { IQuestion } from "../../Types/interfaces";
import Button from "../Button";
import { ResponseQuestionModal } from "./ResponseQuestionModal";

interface IQuestionCardProps {
  question: IQuestion;
}

export const QuestionCard = (props: IQuestionCardProps) => {
  const {
    question,
    response,
    name,
    questionDate,
    responseDate,
  } = props.question;

  const [openModal, setOpenModal] = useState<boolean>(false);

  const date = new Date();

  const handelResponde = () => {
    setOpenModal(true);
  };

  const handelAwnser = (awnser: string) => {
    setOpenModal(false);
    alert(awnser);
  };

  return (
    <article className="bg-darkCard p-4 rounded-lg">
      <div>
        <p className="text-sm">{`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</p>
        <div className="flex items-center flex-wrap">
          <h4 className="font-bold text-2xl mr-8">{question}</h4>
          <p className="italic text-gray-400">{name || "Anonymous"}</p>
        </div>
      </div>
      <div
        style={{ borderColor: "#0070f3" }}
        className="mt-4 border-t pt-3 border-dashed"
      >
        {response ? (
          <p>{response}</p>
        ) : (
          <Button onClick={handelResponde} color="primary">
            Response
          </Button>
        )}
      </div>
      <Modal
        blur
        closeButton
        onClose={() => setOpenModal(false)}
        open={openModal}
      >
        <ResponseQuestionModal onAwnser={handelAwnser} question={question} />
      </Modal>
    </article>
  );
};
