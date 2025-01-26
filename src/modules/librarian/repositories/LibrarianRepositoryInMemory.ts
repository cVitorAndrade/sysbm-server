import { Librarian } from '../entities/librarian';
import { LibrarianRepository } from './LibrarianRepository';

export class LibrarianRepositoryInMemory implements LibrarianRepository {
  librarians: Librarian[] = [];
  async create(librarian: Librarian): Promise<void> {
    this.librarians.push(librarian);
  }
}
