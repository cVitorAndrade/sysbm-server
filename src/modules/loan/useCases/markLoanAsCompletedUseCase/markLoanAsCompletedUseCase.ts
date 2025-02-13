import { Injectable, NotFoundException } from '@nestjs/common';
import { LoanRepository } from '../../repositories/LoanRepository';
import { LoanStatus } from '../../entities/loanStatus';

interface MarkLoanAsCompletedRequest {
  receivedById: string;
  bookConditionReturn: string;
  status: LoanStatus;
  loanId: string;
}

@Injectable()
export class MarkLoanAsCompletedUseCase {
  constructor(private loanRepository: LoanRepository) {}

  async execute({
    bookConditionReturn,
    receivedById,
    status,
    loanId,
  }: MarkLoanAsCompletedRequest) {
    const loan = await this.loanRepository.findById(loanId);
    if (!loan) throw new NotFoundException();

    loan.bookConditionReturn = bookConditionReturn;
    loan.receivedById = receivedById;
    loan.status = status;
    loan.returnDate = new Date();

    await this.loanRepository.save(loan);
    return loan;
  }
}
