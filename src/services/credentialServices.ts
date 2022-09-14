import {
  CredentialArray,
  CredentialInsertData,
  Credential,
} from "../types/credentialTypes.js";
import * as credentialRepository from "../repositories/credentialRepository.js";
import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();

export async function createCredential(
  credential: Omit<CredentialInsertData, "userId">,
  userId: number
) {
  const { username, password, title, url } = credential;
  const credentialFromDB = await credentialRepository.verifyIfExists({
    userId,
    title,
  });
  if (credentialFromDB?.title === title)
    throw { code: "NotAllowed", message: "Credencial já cadastrada!" };
  await credentialRepository.create({
    username,
    password: encriptPassword(password),
    title,
    userId,
    url,
  });
}

export async function findManyByUserId(userId: number) {
  if (!userId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const credentials: CredentialArray =
    await credentialRepository.findManyByUserId(userId);
  const credential_list: CredentialArray = credentials?.map((credential) => {
    return {
      ...credential,
      password: decriptPassword(credential.password),
    };
  });
  return credential_list;
}

export async function findByCredentialId(userId: number, credentialId: number) {
  if (!credentialId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const credential: Credential = await credentialRepository.findUniqueById(
    credentialId
  );
  if (!credential)
    throw { code: "NotFound", message: "Essa credencial não existe..." };
  if (userId !== credential.userId)
    throw {
      code: "NotAllowed",
      message: "Você não tem permissão de acesso a essa credencial!",
    };
  return {
    ...credential,
    password: decriptPassword(credential.password),
  };
}

export async function deleteCredential(userId: number, credentialId: number) {
  if (!credentialId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const credential: Credential = await credentialRepository.findUniqueById(
    credentialId
  );
  if (!credential)
    throw { code: "NotFound", message: "Essa credencial não existe..." };
  if (userId !== credential.userId)
    throw {
      code: "NotAllowed",
      message: "Você não tem permissão para deletar essa credencial!",
    };
  await credentialRepository.deleteById(credentialId);
}

function encriptPassword(password: string) {
  const cryptr = new Cryptr(process.env.SECRET_KEY);
  return cryptr.encrypt(password);
}

function decriptPassword(encripted_password: string) {
  const cryptr = new Cryptr(process.env.SECRET_KEY);
  return cryptr.decrypt(encripted_password);
}
