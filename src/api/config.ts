const API_ROOT = process.env.NEXT_PUBLIC_API_URL;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

const HEADERS = {
  "Content-Type": "application/json",
  ACCESS_TOKEN,
};

export { API_ROOT, HEADERS };
