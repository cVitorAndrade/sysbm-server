import { Body, Controller, Post } from '@nestjs/common';
import { CreateShelfUseCase } from 'src/modules/shelf/useCases/createShelfUseCase/createShelfUseCase';
import { CreateShelfBody } from './dtos/createShelfBody';
import { ShelfViewModel } from './viewModel/shelfViewModel';

@Controller('shelf')
export class ShelfController {
  constructor(private createShelfUseCase: CreateShelfUseCase) {}

  @Post()
  async createShelf(@Body() createShelfBody: CreateShelfBody) {
    const shelf = await this.createShelfUseCase.execute(createShelfBody);
    return ShelfViewModel.toHttp(shelf);
  }
}
