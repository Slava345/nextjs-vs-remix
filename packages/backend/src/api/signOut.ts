import { v4 as uuid } from "uuid";

export async function signOut() {
  try {
    const uid = uuid();

    const resp = await fetch(`${process.env.GATEWAY}/v1/sign_out`, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
        "X-PLATFORM": "web",
        "X-Trace-Id": uid,
      },
      body: JSON.stringify({
        brandName: process.env.BRAND_NAME,
      }),
    });

    return await resp.json();
  } catch (error) {
    return new Error("err fetching games");
  }
}