import { v4 as uuid } from "uuid";
import { RegistrationForm } from "@workspace/backend/types.ts"

export default function register(formData: RegistrationForm) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
    "X-PLATFORM": "web",
    "X-Trace-Id": uuid(),
  };

  return fetch(`${process.env.GATEWAY}/v1/sign_up/manual`, {
    method: "post",
    credentials: "include",
    headers,
    body: JSON.stringify(formData),
  });
}

