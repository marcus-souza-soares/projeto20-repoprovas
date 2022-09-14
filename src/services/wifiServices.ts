import Cryptr from "cryptr";
import * as wifiRepository from "../repositories/wifiRepository.js";
import { Wifi, WifiInsertData } from "../types/wifiTypes";

export async function createWifi(
  userId: number,
  wifi: Omit<WifiInsertData, "id">
) {
  if (!userId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const { title } = wifi;
  const wifiFromBb: Wifi = await wifiRepository.verifyIfExists({
    title,
    userId,
  });
  if (wifiFromBb?.title.trim() === title)
    throw { code: "NotAllowed", message: "Wifi já cadastrado!" };
  await wifiRepository.createWifi({
    ...wifi,
    password: encriptPassword(wifi.password),
    userId,
  });
}

export async function getWifis(userId: number) {
  if (!userId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const wifis: Wifi[] = await wifiRepository.getwifis(userId);
  const wifi_list: Wifi[] = wifis?.map((wifi) => {
    return {
      ...wifi,
      password: decriptPassword(wifi.password),
    };
  });
  return wifi_list;
}

export async function getUniqueWifi(userId: number, wifiId: number) {
  if (!wifiId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const wifi: Wifi = await wifiRepository.getUniqueWifi(wifiId);
  if (!wifi) throw { code: "NotFound", message: "Essa rede não existe..." };
  if (userId !== wifi.userId)
    throw {
      code: "NotAllowed",
      message: "Você não tem permissão de acesso a esse wifi!",
    };
  return {
    ...wifi,
    password: decriptPassword(wifi.password),
  };
}

export async function deleteWifi(userId: number, wifiId: number) {
  if (!wifiId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const wifi: Wifi = await wifiRepository.getUniqueWifi(wifiId);
  if (!wifi) throw { code: "NotFound", message: "Essa rede não existe..." };
  if (userId !== wifi.userId)
    throw {
      code: "NotAllowed",
      message: "Você não tem permissão para deletar essa credencial!",
    };
  await wifiRepository.deleteWifi(wifiId);
}

function encriptPassword(password: string) {
  const cryptr = new Cryptr(process.env.SECRET_KEY);
  return cryptr.encrypt(password);
}

function decriptPassword(encripted_password: string) {
  const cryptr = new Cryptr(process.env.SECRET_KEY);
  return cryptr.decrypt(encripted_password);
}
