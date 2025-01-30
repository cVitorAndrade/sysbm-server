import { Reader } from '../entities/reader';

export abstract class ReaderRepository {
  abstract create(reader: Reader): Promise<void>;
}
