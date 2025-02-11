import { useLoaderData } from "@remix-run/react";
import HomePage from "@workspace/ui/app/dashboard/page";
import { getAllGames } from "@workspace/backend/api/getAllGames";

export const loader = async () => {
    try {
        const resp = await getAllGames();
        const games = await (resp as Response).json();
        
        return {
            games,
        };
    } catch (error) {
        console.log('error in the loader: ', error);
        
        return {
            games: {
                categories: [],
                error,
            },
        };
    }
};

export default function Home() {
  const {games} = useLoaderData<typeof loader>();

  console.log("games AAA", games);

  return <HomePage />;
}
