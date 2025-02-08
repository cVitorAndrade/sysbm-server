import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { CreateLoanUseCase } from 'src/modules/loan/useCases/createLoanUseCase/createLoanUseCase';
import { GetLoanDaysByPageCountUseCase } from 'src/modules/loan/useCases/getLoanDaysByPageCountUseCase/getLoanDaysByPageCountUseCase';
import { CreateLoanBody } from './dtos/createLoanBody';
import { AuthenticatedRequestModel } from '../auth/models/authenticatedRequestModel';
import { Librarian } from 'src/modules/librarian/entities/librarian';
import { LoanViewModel } from './viewModel/loanViewModel';
import { GetAllLoansUseCase } from 'src/modules/loan/useCases/getAllLoans/getAllLoans';
import { LoanWithDetailsViewModel } from './viewModel/loanWithDetailsViewModel';

@Controller('loans')
export class LoanController {
  constructor(
    private createLoanUseCase: CreateLoanUseCase,
    private getLoanDaysByPageCountUseCase: GetLoanDaysByPageCountUseCase,
    private getAllLoansUseCase: GetAllLoansUseCase,
  ) {}

  @Post()
  async createLoan(
    @Request() request: AuthenticatedRequestModel,
    @Body() body: CreateLoanBody,
  ) {
    const { id } = request.user as Librarian;
    const { bookId, readerId, bookConditionDelivery, observation } = body;

    const loanDays = await this.getLoanDaysByPageCountUseCase.execute({
      bookId,
    });

    const loan = await this.createLoanUseCase.execute({
      bookId,
      librarianId: id,
      bookConditionDelivery,
      finalDate: new Date(new Date().setDate(new Date().getDate() + loanDays)),
      observation,
      readerId,
    });

    return LoanViewModel.toHttp(loan);
  }

  @Get()
  async getAllLoans() {
    const loans = await this.getAllLoansUseCase.execute();
    return loans.map((loan) => LoanWithDetailsViewModel.toHttp(loan));
  }
}
