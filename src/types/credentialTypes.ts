import { credentials } from "@prisma/client";

type CredentialInsertData = Omit<credentials, "id">;
type Credential = credentials;
type CredentialPartial = Partial<credentials>;
type CredentialArray = credentials[];

export { CredentialInsertData, Credential, CredentialPartial, CredentialArray };
