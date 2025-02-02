import { BookShelf as BookshelfRaw } from '@prisma/client';
import { Bookshelf } from 'src/modules/bookshelf/entities/bookshelf';

export class PrismaBookshelfMapper {
  static toPrisma({
    id,
    name,
    color,
    description,
    createdAt,
  }: Bookshelf): BookshelfRaw {
    return {
      id,
      name,
      color,
      description,
      createdAt,
    };
  }

  static toDomain({
    id,
    name,
    color,
    description,
    createdAt,
  }: BookshelfRaw): Bookshelf {
    const bookshelf = new Bookshelf(
      {
        color,
        name,
        description,
        createdAt,
      },
      id,
    );

    return bookshelf;
  }
}
