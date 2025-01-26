import { Librarian } from 'src/modules/librarian/entities/librarian';
import { Librarian as LibrarianRaw } from '@prisma/client';

export class PrismaLibrarianMapper {
  static toPrisma({
    id,
    email,
    name,
    password,
    cpf,
    permission,
    phoneNumber,
    status,
    createdAt,
  }: Librarian): LibrarianRaw {
    return {
      id,
      email,
      name,
      password,
      cpf,
      permission,
      phoneNumber,
      status,
      createdAt,
    };
  }
}