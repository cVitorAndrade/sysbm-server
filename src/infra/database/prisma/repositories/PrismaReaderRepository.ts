import { Injectable } from '@nestjs/common';
import { ReaderRepository } from 'src/modules/reader/repositories/readerRepository';
import { PrismaService } from '../prisma.service';
import { Reader } from 'src/modules/reader/entities/reader';
import { PrismaReaderMapper } from '../mappers/PrismaReaderMapper';

@Injectable()
export class PrismaReaderRepository implements ReaderRepository {
  constructor(private prismaService: PrismaService) {}

  async create(reader: Reader): Promise<void> {
    const readerRaw = PrismaReaderMapper.toPrisma(reader);
    await this.prismaService.reader.create({
      data: {
        ...readerRaw,
        birtDate: new Date(readerRaw.createdAt),
      },
    });
  }
}
