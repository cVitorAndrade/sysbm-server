import { Reader as ReaderRaw } from '@prisma/client';

export class PrismaReaderMapper {
  static toPrisma({
    id,
    email,
    name,
    cpf,
    phoneNumber,
    status,
    birtDate,
    addressId,
    createdAt,
  }: ReaderRaw): ReaderRaw {
    return {
      id,
      email,
      name,
      cpf,
      phoneNumber,
      status,
      birtDate,
      addressId,
      createdAt,
    };
  }
}
