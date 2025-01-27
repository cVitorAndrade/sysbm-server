import { Body, Controller, Post } from '@nestjs/common';
import { CreateBookshelfBody } from './dtos/createBookshelf';
import { CreateBookshelfUseCase } from 'src/modules/bookshelf/createBookshelfUseCase/createBookshelfUseCase';
import { BookshelfViewModel } from './viewModel/bookshelfViewModel';

@Controller('bookshelf')
export class BookshelfController {
  constructor(private createBookshelfUseCase: CreateBookshelfUseCase) {}

  @Post()
  async createBookshelf(@Body() createBookshelfBody: CreateBookshelfBody) {
    const bookshelf =
      await this.createBookshelfUseCase.execute(createBookshelfBody);
    return BookshelfViewModel.toHttp(bookshelf);
  }
}
