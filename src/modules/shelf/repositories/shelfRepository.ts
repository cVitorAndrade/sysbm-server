import { Shelf } from '../entities/shelf';

export abstract class ShelfRepository {
  abstract create(shelf: Shelf): Promise<void>;
}
