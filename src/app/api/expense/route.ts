import { tiyuliClient } from '@/lib/tiyuli-service'
import { google } from '@/proto/generated/google/protobuf/timestamp'
import { tiyuli } from '@/proto/generated/new_expense'
import { Metadata } from '@grpc/grpc-js'
import { NextResponse } from 'next/server'
import { error } from 'console'
import { promisifyGrpc } from '@/lib/grpc/grpc'

export async function GET(request: Request) {
  const basicAuthToken = Buffer.from(`Oded:567`).toString('base64')
  const metadata = new Metadata()
  metadata.add('authorization', `Basic ${basicAuthToken}`)

  try {
    const res = await promisifyGrpc(tiyuliClient.NewExpense)(
      new tiyuli.expense.NewExpenseRequest({
        amount: 11,
        currency_code: 'USD',
        name: 'rent',
        note: 'tokyo rent',
        types: ['util'],
        payment_date: new google.protobuf.Timestamp(),
      }),
      metadata
    )

    if (!res) {
      return undefined // return status code 500
    }

    return NextResponse.json({ id: res?.id })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
