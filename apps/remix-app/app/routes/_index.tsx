import { useLoaderData } from "@remix-run/react";
import HomePage from "@workspace/ui/app/dashboard/page";
import { getAllGames } from "@workspace/backend/api/getAllGames";

export const loader = async () => {
    const categories = await getAllGames();

   return categories;
};

export default function Home() {
  const {categories} = useLoaderData<typeof loader>();

  return <HomePage categories={categories} appName={'REMIX'} />;
}
