import { LibrarianRepositoryInMemory } from '../../repositories/LibrarianRepositoryInMemory';
import { CreateLibrarianUseCase } from './createLibrarianUseCase';

let createLibrarianUseCase: CreateLibrarianUseCase;
let librarianRepositoryInMemory: LibrarianRepositoryInMemory;

describe('Create librarian', () => {
  beforeEach(() => {
    librarianRepositoryInMemory = new LibrarianRepositoryInMemory();
    createLibrarianUseCase = new CreateLibrarianUseCase(
      librarianRepositoryInMemory,
    );
  });

  it('Should be able to create librarian', async () => {
    expect(librarianRepositoryInMemory.librarians).toEqual([]);

    const librarian = await createLibrarianUseCase.execute({
      email: 'librarian@email.com',
      name: 'Librarian',
      password: '12345678',
      permission: 'admin',
      phoneNumber: '88988776655',
      cpf: '00000000000',
      status: 'active',
    });

    expect(librarianRepositoryInMemory.librarians).toEqual([librarian]);
  });
});