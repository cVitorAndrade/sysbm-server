import { Module } from '@nestjs/common';
import { CreateLoanUseCase } from 'src/modules/loan/useCases/createLoanUseCase/createLoanUseCase';
import { LoanController } from './loan.controller';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { GetLoanDaysByPageCountUseCase } from 'src/modules/loan/useCases/getLoanDaysByPageCountUseCase/getLoanDaysByPageCountUseCase';
import { GetAllLoansUseCase } from 'src/modules/loan/useCases/getAllLoans/getAllLoans';

@Module({
  imports: [DatabaseModule],
  providers: [
    CreateLoanUseCase,
    GetLoanDaysByPageCountUseCase,
    GetAllLoansUseCase,
  ],
  controllers: [LoanController],
})
export class LoanModule {}
