import { Injectable } from '@nestjs/common';
import { Loan } from 'src/modules/loan/entities/loan';
import { LoanRepository } from 'src/modules/loan/repositories/LoanRepository';
import { PrismaLoanMapper } from '../mappers/PrismaLoanMapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaLoanRepository implements LoanRepository {
  constructor(private prismaService: PrismaService) {}
  async create(loan: Loan): Promise<void> {
    const loanRaw = PrismaLoanMapper.toPrisma(loan);

    await this.prismaService.loan.create({
      data: loanRaw,
    });
  }
}
