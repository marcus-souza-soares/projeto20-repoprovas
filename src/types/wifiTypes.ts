import { wifi as wifis } from "@prisma/client";

type Wifi = wifis;
type WifiInsertData = Omit<wifis, "id">

export { Wifi, WifiInsertData}