import { Loan as LoanRaw } from '@prisma/client';
import { Loan } from 'src/modules/loan/entities/loan';

export class PrismaLoanMapper {
  static toPrisma({
    bookConditionDelivery,
    bookConditionReturn,
    bookId,
    createdAt,
    finalDate,
    id,
    librarianId,
    observation,
    readerId,
    receivedById,
    returnDate,
    status,
    timesRenewed,
  }: Loan): LoanRaw {
    return {
      bookConditionDelivery,
      bookConditionReturn,
      bookId,
      createdAt,
      finalDate,
      id,
      librarianId,
      observation,
      readerId,
      receivedById,
      returnDate,
      status,
      timesRenewed,
    };
  }

  static toDomain({
    id,
    bookConditionDelivery,
    bookConditionReturn,
    bookId,
    createdAt,
    finalDate,
    librarianId,
    observation,
    readerId,
    receivedById,
    returnDate,
    status,
    timesRenewed,
  }: LoanRaw): Loan {
    return new Loan(
      {
        bookConditionDelivery,
        bookConditionReturn,
        bookId,
        createdAt,
        finalDate,
        librarianId,
        observation,
        readerId,
        receivedById,
        returnDate,
        status,
        timesRenewed,
      },
      id,
    );
  }
}
