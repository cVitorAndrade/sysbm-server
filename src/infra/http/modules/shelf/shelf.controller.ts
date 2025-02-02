import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateShelfUseCase } from 'src/modules/shelf/useCases/createShelfUseCase/createShelfUseCase';
import { CreateShelfBody } from './dtos/createShelfBody';
import { ShelfViewModel } from './viewModel/shelfViewModel';
import { GetShelfUseCase } from 'src/modules/shelf/useCases/getShelfUseCase/getShelfUseCase';

@Controller('shelf')
export class ShelfController {
  constructor(
    private createShelfUseCase: CreateShelfUseCase,
    private getShelfUseCase: GetShelfUseCase,
  ) {}

  @Post()
  async createShelf(@Body() createShelfBody: CreateShelfBody) {
    const shelf = await this.createShelfUseCase.execute(createShelfBody);
    return ShelfViewModel.toHttp(shelf);
  }

  @Get(':id')
  async getShelf(@Param('id') id: string) {
    const shelf = await this.getShelfUseCase.execute({ id });
    return ShelfViewModel.toHttp(shelf);
  }
}
