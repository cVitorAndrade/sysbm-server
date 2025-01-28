import { Book } from 'src/modules/book/entities/book';
import { BookRepository } from 'src/modules/book/repositories/BookRepository';
import { PrismaService } from '../prisma.service';
import { PrismaBookMapper } from '../mappers/PrismaBookMapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaBookRepository implements BookRepository {
  constructor(private prismaService: PrismaService) {}

  async create(book: Book): Promise<void> {
    const bookRaw = PrismaBookMapper.toPrisma(book);

    await this.prismaService.book.create({
      data: bookRaw,
    });
  }
}
