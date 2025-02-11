import HomePage from "@workspace/ui/app/dashboard/page";
import { getAllGames } from "@workspace/backend/api/getAllGames";

const fetchData = async () => {
  try {
    const resp = await getAllGames();
    const games = await (resp as Response).json();

    return games;
  } catch (error) {
    console.log("error in the fetchData: ", error);
    return {
      categories: [],
      error,
    };
  }
};

export default async function Home() {
  const games = await fetchData();

  console.log("games BBB", games);

  return <HomePage />;
}
