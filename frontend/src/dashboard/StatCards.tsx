import React from "react";
import { StatCardType } from "../types";

interface StatCardsProps {
  cards: StatCardType[];
}

export const StatCards: React.FC<StatCardsProps> = ({ cards }) => {
  return (
    <div className="flex flex-wrap gap-5 p-0 m-0 max-md:flex-col ">
      {cards.map((card, index) => (
        <article
          key={index}
          className="flex flex-col flex-1 gap-3 p-6 m-0 bg-white rounded-xl min-w-[200px] dark:bg-neutral-800"
        >
          <h3 className="p-0 m-0 text-sm text-zinc-500 dark:text-neutral-200">{card.title}</h3>
          <p className="p-0 m-0 text-3xl font-bold text-neutral-800 dark:text-neutral-200">{card.value}</p>
          <p
            className={`p-0 m-0 text-sm font-semibold ${card.isPositive !== false ? "text-green-500" : "text-red-500"}`}
          >
            {card.change}
          </p>
        </article>
      ))}
    </div>
  );
};
