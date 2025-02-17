import { Fragment } from 'react';
import { GameCategoryHorizontal } from "@workspace/ui/components/game-category-horizontal";
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
          <Fragment key={i.code}>
            <h3 className="text-2xl font-bold mt-4 px-4" >{i.title}</h3>

            <div
              className={`w-[100vw] md:w-minus-sidebar overflow-x-auto`}
            >
              <GameCategoryHorizontal games={games} />
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
