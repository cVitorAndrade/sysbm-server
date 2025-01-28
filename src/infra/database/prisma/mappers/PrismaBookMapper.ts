import { Book as BookRaw } from '@prisma/client';
import { Book } from 'src/modules/book/entities/book';

export class PrismaBookMapper {
  static toPrisma({
    acquisitionMethod,
    author,
    available,
    bookShelfId,
    copies,
    createdAt,
    genre,
    id,
    isbn,
    language,
    librarianId,
    notes,
    numberOfPages,
    publicationYear,
    publisher,
    registrationNumber,
    shelfId,
    title,
    volume,
  }: Book): BookRaw {
    return {
      acquisitionMethod,
      author,
      available,
      bookShelfId,
      copies,
      createdAt,
      genre,
      id,
      isbn,
      language,
      librarianId,
      notes,
      numberOfPages,
      publicationYear,
      publisher,
      registrationNumber,
      shelfId,
      title,
      volume,
    };
  }
}
