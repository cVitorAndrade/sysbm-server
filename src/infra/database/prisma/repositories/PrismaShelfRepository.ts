import { Shelf } from 'src/modules/shelf/entities/shelf';
import { ShelfRepository } from 'src/modules/shelf/repositories/shelfRepository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaShelfMapper } from '../mappers/PrismaShelfMapper';

@Injectable()
export class PrismaShelfRepository implements ShelfRepository {
  constructor(private prismaService: PrismaService) {}

  async create(shelf: Shelf): Promise<void> {
    const shelfRaw = PrismaShelfMapper.toPrisma(shelf);

    await this.prismaService.shelf.create({
      data: shelfRaw,
    });
  }
}
