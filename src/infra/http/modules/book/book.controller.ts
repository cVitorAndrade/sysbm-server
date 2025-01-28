import { Body, Controller, Post } from '@nestjs/common';
import { CreateBookUseCase } from 'src/modules/book/useCases/createBookUseCase';
import { CreateBookBody } from './dtos/createBookBody';
import { BookViewModel } from './viewModel/bookViewModel';

@Controller('book')
export class BookController {
  constructor(private createBookUseCase: CreateBookUseCase) {}

  @Post()
  async createBook(@Body() createBookBody: CreateBookBody) {
    const book = await this.createBookUseCase.execute(createBookBody);
    return BookViewModel.toHttp(book);
  }
}
