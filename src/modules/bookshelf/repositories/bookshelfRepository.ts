import { Bookshelf } from '../entities/bookshelf';

export abstract class BookshelfRepository {
  abstract create(bookshelf: Bookshelf): Promise<void>;
}
