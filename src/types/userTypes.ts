import { users } from "@prisma/client";

type User = users;
type UserIsertData = Omit<users, "id">;

export { User, UserIsertData }
