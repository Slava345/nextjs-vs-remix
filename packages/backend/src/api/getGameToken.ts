import { v4 as uuid } from "uuid";
import { TokenData } from "@workspace/backend/types.ts"

export async function getGameToken({
  code,
  counterparty,
  currency,
}: {
  code: string;
  counterparty: string;
  currency: "GC" | "SC";
}): Promise<TokenData> {
  const uid = uuid();

  const resp = await fetch(
    `${process.env.GATEWAY}/v1/dispatch/GetTemporaryTokenRequest?brandName=${process.env.BRAND_NAME}&platform=web`,
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
        body: {
          type: "GetTemporaryTokenRequest",
          code,
          counterparty,
          currency,
        },
      }),
    }
  );

  const { body } = await resp.json();

  return body
}
