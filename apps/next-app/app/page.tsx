import HomePage from "@workspace/ui/app/dashboard/page";
import { getAllGames } from "@workspace/backend/api/getAllGames";

export default async function Home() {
  const data = await getAllGames();

  return <HomePage categories={data.categories} />;
}
