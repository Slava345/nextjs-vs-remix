import { Card, CardContent, CardTitle } from "@workspace/ui/components/card";


interface GameCategoryItem {
  code: string;
  title: string;
  imageUrl: string;
}

type Props = {
  games: GameCategoryItem[];
};

export function GameCategoryHorizontal({ games }: Props) {
  return (
      <div className="grid w-max py-4 grid-flow-col gap-4 auto-cols-[150px] cursor-pointer px-4">
        {games.map((game) => (
          <Card key={game.code}>
            <CardContent className="p-0 aspect-[3/4] overflow-hidden relative">
              <img
                src={game.imageUrl || "/placeholder.svg"}
                alt={game.title}
                className="rounded-md object-cover"
              />
            </CardContent>
            <CardTitle className="p-2 text-sm text-center">
              {game.title}
            </CardTitle>
          </Card>
        ))}
      </div>
  );
}
