import { v4 as uuid } from "uuid";
import { GameCategory } from "@workspace/backend/types.ts";


// const path = !isBrowser() ? process.env.SERVER_FETCH_URL : process.env.GATEWAY
//   const url = `${path}/v1/product-layout?brandName=${process.env.BRAND_NAME}`
export async function getAllGames() {
  try {
    const url = `${process.env.SERVER_FETCH_URL}/v1/product-layout?brandName=${process.env.BRAND_NAME}`;
    
    const resp =  await fetch(
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
    const data = await (resp as Response).json();

    return {
      categories: data.categories as GameCategory[],
      error: null,
    };

  } catch (error) {
    return {
      categories: [],
      error,
    };
  }
}
