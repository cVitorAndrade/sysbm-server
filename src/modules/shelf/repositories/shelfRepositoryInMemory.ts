import { Shelf } from '../entities/shelf';
import { ShelfRepository } from './shelfRepository';

export class ShelfRepositoryInMemory implements ShelfRepository {
  shelfs: Shelf[] = [];
  async create(shelf: Shelf): Promise<void> {
    this.shelfs.push(shelf);
  }
}
