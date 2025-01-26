import { hash } from 'bcrypt';
import { Librarian } from '../../entities/librarian';
import { LibrarianRepository } from '../../repositories/LibrarianRepository';

interface CreateLibrarianRequest {
  email: string;
  name: string;
  password: string;
  permission: string;
  cpf: string;
  phoneNumber: string;
  status: string;
}

export class CreateLibrarianUseCase {
  constructor(private librarianRepository: LibrarianRepository) {}

  async execute(createLibrarianRequest: CreateLibrarianRequest) {
    const librarian = new Librarian({
      ...createLibrarianRequest,
      password: await hash(createLibrarianRequest.password, 10),
    });

    this.librarianRepository.create(librarian);
    return librarian;
  }
}
