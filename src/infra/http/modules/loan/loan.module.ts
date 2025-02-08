import { Module } from '@nestjs/common';
import { CreateLoanUseCase } from 'src/modules/loan/useCases/createLoanUseCase/createLoanUseCase';
import { LoanController } from './loan.controller';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { GetLoanDaysByPageCountUseCase } from 'src/modules/loan/useCases/GetLoanDaysByPageCountUseCase/GetLoanDaysByPageCountUseCase';

@Module({
  imports: [DatabaseModule],
  providers: [CreateLoanUseCase, GetLoanDaysByPageCountUseCase],
  controllers: [LoanController],
})
export class LoanModule {}
