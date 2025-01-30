import { Body, Controller, Post } from '@nestjs/common';
import { CreateReaderUseCase } from 'src/modules/reader/useCases/createReaderUseCase/createReaderUseCase';
import { CreateReaderBody } from './dtos/createReaderBody';
import { ReaderViewModel } from './viewModel/readerViewModel';

@Controller('reader')
export class ReaderController {
  constructor(private createReaderUseCase: CreateReaderUseCase) {}

  @Post()
  async createReader(@Body() createReaderBody: CreateReaderBody) {
    const reader = await this.createReaderUseCase.execute(createReaderBody);
    return ReaderViewModel.toHttp(reader);
  }
}
