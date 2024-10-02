import { tiyuli } from '@/proto/generated/expense_service'
import { credentials } from '@grpc/grpc-js'

export const tiyuliClient = new tiyuli.expense.ExpenseServiceClient('5.75.232.8:50051', credentials.createInsecure())
