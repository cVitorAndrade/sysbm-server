import { Body, Controller, Post } from '@nestjs/common';
import { CreateBookshelfBody } from './dtos/createBookshelf';
import { BookshelfViewModel } from './viewModel/bookshelfViewModel';
import { CreateBookshelfUseCase } from 'src/modules/bookshelf/useCases/createBookshelfUseCase/createBookshelfUseCase';

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
