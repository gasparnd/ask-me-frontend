import { Alert } from "@chakra-ui/react";
import axios from "axios";
import { API_ROOT, HEADERS } from "./config";

const api: any = axios;

export const GetUserByNikname = async (nickName: string) => {
  try {
    const res = await api.get(`${API_ROOT}/users/@/${nickName}`, {
      headers: {
        ...HEADERS,
      },
    });

    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: index.ts ~ line 15 ~ GetUserByNikname ~ error",
      error
    );
  }
};
