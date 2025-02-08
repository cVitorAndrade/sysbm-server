import { Loan } from '../entities/loan';

export abstract class LoanRepository {
  abstract create(loan: Loan): Promise<void>;
}
