import { v4 as uuid } from "uuid";


// const path = !isBrowser() ? process.env.SERVER_FETCH_URL : process.env.GATEWAY
//   const url = `${path}/v1/product-layout?brandName=${process.env.BRAND_NAME}`
export async function getAllGames() {
  try {
    const url = `${process.env.SERVER_FETCH_URL}/v1/product-layout?brandName=${process.env.BRAND_NAME}`;
    
    return await fetch(
      url,
      {
        method: "get",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
          "X-PLATFORM": "web",
          "X-Trace-Id": uuid(),
        },
      }
    );
  } catch (error) {
    return new Error("err fetching games");
  }
}
