import { Librarian } from 'src/modules/librarian/entities/librarian';
import { LibrarianRepository } from 'src/modules/librarian/repositories/LibrarianRepository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaLibrarianMapper } from '../mappers/PrismaLibrarianMapper';

@Injectable()
export class PrismaLibrarianRepository implements LibrarianRepository {
  constructor(private prismaService: PrismaService) {}
  async create(librarian: Librarian): Promise<void> {
    const userRaw = PrismaLibrarianMapper.toPrisma(librarian);

    await this.prismaService.librarian.create({
      data: userRaw,
    });
  }
}
