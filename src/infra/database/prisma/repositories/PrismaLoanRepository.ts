import { Injectable } from '@nestjs/common';
import { Loan } from 'src/modules/loan/entities/loan';
import { LoanRepository } from 'src/modules/loan/repositories/LoanRepository';
import { PrismaLoanMapper } from '../mappers/PrismaLoanMapper';
import { PrismaService } from '../prisma.service';
import { LoanWithDetails } from 'src/modules/loan/entities/LoanWithDetails';

@Injectable()
export class PrismaLoanRepository implements LoanRepository {
  constructor(private prismaService: PrismaService) {}

  async create(loan: Loan): Promise<void> {
    const loanRaw = PrismaLoanMapper.toPrisma(loan);

    await this.prismaService.loan.create({
      data: loanRaw,
    });
  }

  async getAll(): Promise<LoanWithDetails[]> {
    const loansRaw = await this.prismaService.loan.findMany({
      include: {
        book: true,
        reader: true,
      },
    });

    const loans = loansRaw.map((loan) =>
      PrismaLoanMapper.toDomainWithDetails(loan, loan.book, loan.reader),
    );

    return loans;
  }
}
