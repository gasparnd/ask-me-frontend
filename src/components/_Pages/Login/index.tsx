import { NextPage } from "next";
import { useRouter } from "next/router";
import { Checkbox, Input, Loading, Spacer } from "@nextui-org/react";
import { useState } from "react";

import Button from "../../Button";

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
    <section className="h-screen">
      <form
        className="h-full flex flex-col items-center justify-center"
        onSubmit={handelSubmit}
      >
        <div
          style={{ background: "#1A1A40", minWidth: 300 }}
          className="p-4 border-transparent rounded-lg"
        >
          <h1 className="text-darkText text-5xl font-bold text-center mb-16">
            Login
          </h1>
          <p className="text-darkText mb-3">Email</p>
          <Input
            onChange={(ev: any) => {
              setForm({ ...form, email: ev.target.value });
            }}
            width="100%"
            type="email"
            labelPlaceholder="Email"
            placeholder="Email"
          />
          <p className="text-darkText mt-6 mb-3">Password</p>
          <Input.Password
            onChange={(ev: any) => {
              setForm({ ...form, password: ev.target.value });
            }}
            width="100%"
            labelPlaceholder="Password"
            placeholder="Password"
          />
          <Spacer y={1} />
          <Checkbox
            onChange={(ev) => setForm({ ...form, rememberMe: ev })}
            labelColor="primary"
            initialChecked={form.rememberMe}
          >
            Remember me
          </Checkbox>
          <Spacer y={1} />
          <Button
            type="submit"
            className="w-full"
            color="primary"
            disabled={loading}
          >
            {loading ? <Loading color="white" /> : "Login"}
          </Button>
        </div>
      </form>
    </section>
  );
};
