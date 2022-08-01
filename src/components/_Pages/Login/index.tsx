import { Button, Checkbox, Input } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Illustration from "../../../../public/images/question-illustration.svg";

interface IForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const LoginPage: NextPage = () => {
  const router = useRouter();

  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
    rememberMe: true,
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handelSubmit = (ev: any) => {
    ev.preventDefault();

    setLoading(true);

    setTimeout(() => router.push("/gasparnd"), 1000);
  };

  return (
    <section className="h-screen flex justify-end">
      <div className="hidden w-1/2 md:flex items-center justify-start">
        <Image alt="sdfds" height={300} width={300} src={Illustration} />
      </div>
      <div className="w-full md:w-1/2 bg-cardBackground">
        <form
          className="h-full flex flex-col items-center justify-center"
          onSubmit={handelSubmit}
        >
          <div style={{ minWidth: 300 }} className="p-4 ">
            <h1 className="text-lightText text-5xl font-bold text-center mb-16">
              Iniciar sesión
            </h1>
            <Input
              onChange={(ev: any) => {
                setForm({ ...form, email: ev.target.value });
              }}
              width="100%"
              type="email"
              placeholder="Email"
              className="mb-8"
            />
            <Input
              onChange={(ev: any) => {
                setForm({ ...form, password: ev.target.value });
              }}
              width="100%"
              placeholder="Contraseña "
            />
            <Checkbox
              className="my-8 text-lightText"
              onChange={(ev) =>
                setForm({ ...form, rememberMe: ev.target.checked })
              }
            >
              Remember me
            </Checkbox>
            <Button type="submit" className="w-full" disabled={loading}>
              Iniciar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
