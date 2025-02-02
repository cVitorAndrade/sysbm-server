import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBookshelfBody } from './dtos/createBookshelf';
import { BookshelfViewModel } from './viewModel/bookshelfViewModel';
import { CreateBookshelfUseCase } from 'src/modules/bookshelf/useCases/createBookshelfUseCase/createBookshelfUseCase';
import { GetBookshelfUseCase } from 'src/modules/bookshelf/useCases/getBookshelfUseCase/getBookshelfUseCase';
import { Bookshelf } from 'src/modules/bookshelf/entities/bookshelf';

@Controller('bookshelf')
export class BookshelfController {
  constructor(
    private createBookshelfUseCase: CreateBookshelfUseCase,
    private getBookshelfUseCase: GetBookshelfUseCase,
  ) {}

  @Post()
  async createBookshelf(@Body() createBookshelfBody: CreateBookshelfBody) {
    const bookshelf =
      await this.createBookshelfUseCase.execute(createBookshelfBody);
    return BookshelfViewModel.toHttp(bookshelf);
  }

  @Get('/:id')
  async getBookshelf(@Param('id') id: string) {
    const bookshelf = await this.getBookshelfUseCase.execute({
      id,
    });

    return BookshelfViewModel.toHttp(bookshelf as Bookshelf);
  }
}
