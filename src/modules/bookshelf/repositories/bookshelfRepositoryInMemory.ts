import { Bookshelf } from '../entities/bookshelf';
import { BookshelfRepository } from './bookshelfRepository';

export class BookshelfRepositoryInMemory implements BookshelfRepository {
  bookshelfs: Bookshelf[] = [];
  async create(bookshelf: Bookshelf): Promise<void> {
    this.bookshelfs.push(bookshelf);
  }
}
