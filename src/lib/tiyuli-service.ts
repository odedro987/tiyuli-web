import { credentials } from '@grpc/grpc-js';
import { tiyuli } from '../protos/generated/expense_service';

export const tiyuliClient = new tiyuli.expense.ExpenseServiceClient(
  '5.75.232.8:50051',
  credentials.createInsecure()
);
