import { Reader } from '../entities/reader';

export abstract class ReaderRepository {
  abstract create(reader: Reader): Promise<void>;
  abstract findByCpf(cpf: string): Promise<Reader | null>;
  abstract getAll(): Promise<Reader[]>;
}
