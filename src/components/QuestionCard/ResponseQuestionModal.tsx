import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

interface IResponseQuestionModalProps {
  question: string;
  onAwnser: (value: string) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const ResponseQuestionModal = (props: IResponseQuestionModalProps) => {
  const { question, onAwnser, open, setOpen } = props;

  const [awnser, setAawnser] = useState<string>("");
  return (
    <Modal onClose={() => setOpen(false)} isOpen={open}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <div className="p-4">
            <h4 className="font-bold text-2xl mb-8">{question}</h4>

            <Textarea
              width="100%"
              aria-label="awnser"
              onChange={(ev) => setAawnser(ev.target.value)}
              placeholder="Escribe tu respuesta"
            />
          </div>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button colorScheme="blue" mr={3} onClick={() => onAwnser(awnser)}>
            Responder
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
