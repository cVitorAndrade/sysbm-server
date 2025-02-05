import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { CreateBookUseCase } from 'src/modules/book/useCases/createBookUseCase/createBookUseCase';
import { CreateBookBody } from './dtos/createBookBody';
import { BookViewModel } from './viewModel/bookViewModel';
import { AuthenticatedRequestModel } from '../auth/models/authenticatedRequestModel';
import { Librarian } from 'src/modules/librarian/entities/librarian';
import { GetAllBooksUseCase } from 'src/modules/book/useCases/getAllBookUseCase/getAllBookUseCase';

@Controller('book')
export class BookController {
  constructor(
    private createBookUseCase: CreateBookUseCase,
    private getAllBooksUseCase: GetAllBooksUseCase,
  ) {}

  @Post()
  async createBook(
    @Request() request: AuthenticatedRequestModel,
    @Body() createBookBody: CreateBookBody,
  ) {
    const { id } = request.user as Librarian;
    const book = await this.createBookUseCase.execute({
      ...createBookBody,
      librarianId: id,
    });
    return BookViewModel.toHttp(book);
  }

  @Get()
  async getAllBooks() {
    const books = await this.getAllBooksUseCase.execute();
    return books.map((book) => BookViewModel.toHttp(book));
  }
}
