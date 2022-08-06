import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface ICreateQuestionProps {
  ask: { ask: string; name?: string };
  setAsk: (value: { ask: string; name?: string }) => void;
}

const CreateQuestion = (props: ICreateQuestionProps) => {
  const { ask, setAsk } = props;
  const [anonymous, setAnonymous] = useState<boolean>(true);

  let disabledButton = anonymous ? false : ask.name !== "" ? false : true;

  if (anonymous) {
    disabledButton = ask.ask === "" ? true : false;
  } else {
    disabledButton = ask.ask === "" && ask.name === "" ? true : false;
  }

  return (
    <div className="px-4">
      <Textarea
        colorScheme="red"
        placeholder="¡Pregunta cualquier cosa!"
        id="aks"
        aria-label="¡Pregunta cualquier cosa!"
        onChange={(ev) => setAsk({ ...ask, ask: ev.target.value })}
        width="100%"
      />
      <div className="flex justify-between flex-wrap mt-8 ">
        <div className="flex items-center mb-8">
          <FormControl display="flex" alignItems="center">
            <Switch
              className="mr-4"
              isChecked={anonymous}
              onChange={(ev) => setAnonymous(ev.target.checked)}
              id="email-alerts"
            />
            {!anonymous ? (
              <Input
                value={ask.name}
                id="name"
                aria-label="name"
                className="text-darkText"
                onChange={(ev) => setAsk({ ...ask, name: ev.target.value })}
                type="text"
                placeholder="name"
              />
            ) : (
              <FormLabel
                className="text-lightText"
                htmlFor="email-alerts"
                mb="0"
              >
                Anonimo
              </FormLabel>
            )}
          </FormControl>
        </div>

        <Button disabled={disabledButton} color="primary">
          Preguntar
        </Button>
      </div>
    </div>
  );
};

export default CreateQuestion;
