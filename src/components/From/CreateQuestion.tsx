import React, { useState } from "react";
import { Input, Switch, Textarea } from "@nextui-org/react";

import Button from "../Button";

interface ICreateQuestionProps {
  ask: { ask: string; name?: string };
  setAsk: (value: { ask: string; name?: string }) => void;
}

const CreateQuestion = (props: ICreateQuestionProps) => {
  const { ask, setAsk } = props;
  const [anonymous, setAnonymous] = useState<boolean>(true);

  const disabledButton = anonymous ? false : ask.name !== "" ? false : true;

  return (
    <div className="px-4">
      <Textarea
        placeholder="Ask me anything!!!"
        id="aks"
        aria-label="ask"
        onChange={(ev) => setAsk({ ...ask, ask: ev.target.value })}
        width="100%"
      />
      <div className="flex justify-between flex-wrap mt-8 ">
        <div className="flex items-center mb-8">
          <Switch
            initialChecked={anonymous}
            onChange={(ev) => setAnonymous(ev.target.checked)}
            className="mr-4"
          />
          {!anonymous ? (
            <Input
              value={ask.name}
              id="name"
              aria-label="name"
              onChange={(ev) => setAsk({ ...ask, name: ev.target.value })}
              type="text"
              placeholder="name"
            />
          ) : (
            <p>Anonymous</p>
          )}
        </div>

        <Button disabled={disabledButton} color="primary">
          Ask
        </Button>
      </div>
    </div>
  );
};

export default CreateQuestion;
