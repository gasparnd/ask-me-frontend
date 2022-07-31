import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { IQuestion } from "../../Types/interfaces";
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
    <article className="bg-cardBackground p-1  rounded-lg mb-8">
      <div className="p-4">
        <h4 className="text-lightText font-bold mb-3 text-1xl">
          {name || "Anonimo"}, pregunta:
        </h4>
        <div className="flex items-center ">
          <h4 className="text-lightText text-2xl mr-8">{question}</h4>
        </div>
      </div>
      {response ? (
        <div className="mt-4 bg-background border-t p-4 rounded-lg">
          <p>{response}</p>
        </div>
      ) : (
        <div className="flex justify-end">
          <Button onClick={handelResponde} color="primary">
            Responder
          </Button>
        </div>
      )}

      <ResponseQuestionModal
        question={question}
        onAwnser={handelAwnser}
        open={openModal}
        setOpen={setOpenModal}
      />
    </article>
  );
};
