import { Reader } from '../entities/reader';
import { ReaderRepository } from './readerRepository';

export class ReaderRepositoryInMemory implements ReaderRepository {
  readers: Reader[] = [];
  async create(reader: Reader): Promise<void> {
    this.readers.push(reader);
  }
}
