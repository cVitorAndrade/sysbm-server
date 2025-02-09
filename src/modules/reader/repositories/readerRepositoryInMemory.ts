import { Reader } from '../entities/reader';
import { ReaderRepository } from './readerRepository';

export class ReaderRepositoryInMemory implements ReaderRepository {
  readers: Reader[] = [];
  async create(reader: Reader): Promise<void> {
    this.readers.push(reader);
  }

  async findByCpf(cpf: string): Promise<Reader | null> {
    throw new Error('Method not implemented.');
  }

  async getAll(): Promise<Reader[]> {
    throw new Error('Method not implemented.');
  }
}
