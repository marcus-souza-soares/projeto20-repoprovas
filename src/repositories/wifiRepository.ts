import prisma from "../database/prismaClient.js";
import {WifiInsertData, Wifi} from "../types/wifiTypes.js";

export async function createWifi(wifi: WifiInsertData){
  await prisma.wifi.create({
    data: wifi
  })
}
export async function verifyIfExists(data: Partial<Wifi>) {
  return await prisma.wifi.findFirst({
      where: {
          ...data,
      },
  });
}

export async function getwifis(userId: number) {
  return await prisma.wifi.findMany({
      where: { userId },
  });
}

export async function getUniqueWifi(wifiId: number) {
  return await prisma.wifi.findUnique({
      where: {
          id: wifiId,
      },  
  });
}

export async function deleteWifi(wifiId: number) {
  return await prisma.wifi.delete({
      where: {
          id: wifiId,
      },
  });
}
