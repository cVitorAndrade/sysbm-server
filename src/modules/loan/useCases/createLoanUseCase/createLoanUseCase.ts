import { Injectable } from '@nestjs/common';
import { LoanRepository } from '../../repositories/LoanRepository';
import { Loan } from '../../entities/loan';

interface CreateLoanRequest {
  readerId: string;
  librarianId: string;
  bookId: string;
  bookConditionDelivery: string;
  finalDate: Date;
  observation: string | null;
}

@Injectable()
export class CreateLoanUseCase {
  constructor(private loanRepository: LoanRepository) {}

  async execute(createLoanRequest: CreateLoanRequest) {
    const loan = new Loan(createLoanRequest);
    await this.loanRepository.create(loan);
    return loan;
  }
}
