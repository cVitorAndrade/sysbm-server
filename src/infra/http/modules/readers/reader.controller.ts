import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateReaderUseCase } from 'src/modules/reader/useCases/createReaderUseCase/createReaderUseCase';
import { CreateReaderBody } from './dtos/createReaderBody';
import { ReaderViewModel } from './viewModel/readerViewModel';
import { GetUserByCpfUseCase } from 'src/modules/reader/useCases/getReaderByCpfUseCase/getReaderByCpfUseCase';

@Controller('reader')
export class ReaderController {
  constructor(
    private createReaderUseCase: CreateReaderUseCase,
    private getUserByCpfUseCase: GetUserByCpfUseCase,
  ) {}

  @Post()
  async createReader(@Body() createReaderBody: CreateReaderBody) {
    const reader = await this.createReaderUseCase.execute(createReaderBody);
    return ReaderViewModel.toHttp(reader);
  }

  @Get('cpf/:cpf')
  async getReaderByCpf(@Param('cpf') cpf: string) {
    const reader = await this.getUserByCpfUseCase.execute({ cpf });
    return ReaderViewModel.toHttp(reader);
  }
}
