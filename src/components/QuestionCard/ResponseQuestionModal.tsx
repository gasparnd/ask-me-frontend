import { Textarea } from "@nextui-org/react";
import { useState } from "react";
import Button from "../Button";

interface IResponseQuestionModalProps {
  question: string;
  onAwnser: (value: string) => void;
}

export const ResponseQuestionModal = (props: IResponseQuestionModalProps) => {
  const { question, onAwnser } = props;

  const [awnser, setAawnser] = useState<string>("");
  return (
    <div className="p-4">
      <h4 className="font-bold text-2xl mb-8">{question}</h4>

      <Textarea
        width="100%"
        aria-label="awnser"
        onChange={(ev) => setAawnser(ev.target.value)}
        placeholder="Response the question"
      />

      <div className="flex justify-end">
        <Button onClick={() => onAwnser(awnser)} color="primary">
          Save
        </Button>
      </div>
    </div>
  );
};
