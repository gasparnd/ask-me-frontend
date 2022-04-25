import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

import CoverMock from "../../../../public/images/cover-mock.jpg";
import ProfileMock from "../../../../public/images/profile-mock.png";
import { Divider, Input, Switch, Textarea } from "@nextui-org/react";
import Button from "../../Button";
import { useState } from "react";

export const UserPage: NextPage = () => {
  const router = useRouter();
  const { user } = router.query;

  const [ask, setAsk] = useState<string>("");
  const [anonymous, setAnonymous] = useState<boolean>(true);
  const [name, setName] = useState<string>("");

  const disabledButton = anonymous ? false : name !== "" ? false : true;

  return (
    <section className="min-h-screen">
      <section className="relative bg-darkCard h-3/5">
        <figure>
          <Image
            src={CoverMock}
            height={350}
            alt={`cover of ${user}`}
            objectFit="cover"
            layout="responsive"
          />
        </figure>
        <div
          className="relative flex flex-col items-center justify-center"
          style={{ top: "-80px" }}
        >
          <figure
            className=" border-4 border-darkCard rounded-full"
            style={{ width: 150, height: 150 }}
          >
            <Image
              className="rounded-full"
              width={150}
              height={150}
              objectFit="cover"
              layout="responsive"
              src={ProfileMock}
              alt={`photo of ${user}`}
            />
          </figure>
          <h1 className="text-darkText text-2xl">{user}</h1>
        </div>

        <div className="px-4">
          <Textarea
            placeholder="Ask me anything!!!"
            id="aks"
            aria-label="ask"
            onChange={(ev) => setAsk(ev.target.value)}
            width="100%"
          />
          <div className="flex justify-between flex-wrap mt-8">
            <div className="flex items-center">
              <Switch
                initialChecked={anonymous}
                onChange={(ev) => setAnonymous(ev.target.checked)}
                className="mr-4"
              />
              {!anonymous ? (
                <Input
                  value={name}
                  id="name"
                  aria-label="name"
                  onChange={(ev) => setName(ev.target.value)}
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
      </section>
    </section>
  );
};
