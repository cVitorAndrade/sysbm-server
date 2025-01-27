import { Bookshelf } from 'src/modules/bookshelf/entities/bookshelf';
import { BookshelfRepository } from 'src/modules/bookshelf/repositories/bookshelfRepository';
import { PrismaService } from '../prisma.service';
import { PrismaBookshelfMapper } from '../mappers/PrismaBookshelfMapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaBookshelfRepository implements BookshelfRepository {
  constructor(private prismaService: PrismaService) {}

  async create(bookshelf: Bookshelf): Promise<void> {
    const bookshelfRaw = PrismaBookshelfMapper.toPrisma(bookshelf);

    await this.prismaService.bookShelf.create({
      data: bookshelfRaw,
    });
  }
}
