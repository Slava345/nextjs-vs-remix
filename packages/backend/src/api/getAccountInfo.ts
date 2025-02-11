import { v4 as uuid } from "uuid";

export async function getAccountInfo() {
  try {
    const uid = uuid();

    const resp = await fetch(
      `${process.env.GATEWAY}/v1/dispatch/GetAccountInfoRequest?brandName=${process.env.BRAND_NAME}&platform=web`,
      {
        method: "post",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
          "X-PLATFORM": "web",
          "X-Trace-Id": uid,
        },
        body: JSON.stringify({
          headers: { messageId: uid, timestamp: Date.now() },
          body: { type: "GetAccountInfoRequest" },
        }),
      }
    );

    return await resp.json();
  } catch (error) {
    return new Error("err fetching games");
  }
}
