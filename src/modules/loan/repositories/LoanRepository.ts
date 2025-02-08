import { Loan } from '../entities/loan';
import { LoanWithDetails } from '../entities/LoanWithDetails';

export abstract class LoanRepository {
  abstract create(loan: Loan): Promise<void>;
  abstract getAll(): Promise<LoanWithDetails[]>;
}
