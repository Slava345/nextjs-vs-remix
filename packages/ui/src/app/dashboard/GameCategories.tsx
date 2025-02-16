import { GameCategoryHorizontal } from "@workspace/ui/components/game-category-horizontal";
import { SIDEBAR_WIDTH } from "@workspace/ui/components/config"
import type { GameCategory } from "@workspace/backend/types.ts";

type Props = {
  categories: GameCategory[];
};

const IMG_ORIGIN = 'https://storage.googleapis.com/www.spinblitz.com'

export default function GameCategories({ categories }: Props) {
  return (
    <>
      {categories.map((i) => {
        const games = 
          i.products
          .slice(0, 16)
          .map((game) => ({
            code: game.code,
            title: game.title,
            imageUrl: `${IMG_ORIGIN}/tiles/${game.code}/source.png`,
          }));

        return (
          <>
            <h3 className="text-2xl font-bold mt-4 px-4" key={i.code}>{i.title}</h3>

            <div
              className={`w-[100vw] md:w-[calc(100vw-${SIDEBAR_WIDTH})] overflow-x-auto`}
              key={i.code}
            >
              <GameCategoryHorizontal games={games} />
            </div>
          </>
        );
      })}
    </>
  );
}
