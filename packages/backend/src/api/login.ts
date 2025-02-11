import { v4 as uuid } from "uuid";
import { LoginForm } from "@workspace/backend/types.ts"

export function login(formData: LoginForm) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
    "X-PLATFORM": "web",
    "X-Trace-Id": uuid(),
  };

  return fetch(`${process.env.GATEWAY}/v1/sign_in/manual`, {
    method: "post",
    credentials: "include",
    headers,
    body: JSON.stringify(formData),
  });
}

