import { cards } from "@prisma/client";

type CardInsertData = Omit<cards, "id">;
type Card = cards;
type CardPartial = Partial<cards>;
type CardArray = cards[];

export { CardInsertData, Card, CardPartial, CardArray };
