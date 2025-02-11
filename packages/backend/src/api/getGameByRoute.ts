import { v4 as uuid } from "uuid";


export async function getGameByRoute(route: string) {
  const url = `${process.env.GATEWAY}/v1/get-product?brandName=${process.env.BRAND_NAME}&route=${route}`

  const resp = await fetch(url, {
    method: "get",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
      "X-PLATFORM": "web",
      "X-Trace-Id": uuid(),
    },
  })

  return await resp.json()
}