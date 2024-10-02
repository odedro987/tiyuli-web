import { tiyuli } from '@/proto/generated/expense_service'
import { credentials } from '@grpc/grpc-js'

const HOSTNAME = process.env.TIYULI_API_URL
const PORT = process.env.TIYULI_API_PORT

export const tiyuliClient = new tiyuli.expense.ExpenseServiceClient(`${HOSTNAME}:${PORT}`, credentials.createInsecure())
