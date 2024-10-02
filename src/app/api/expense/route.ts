import { tiyuliClient } from '@/lib/tiyuli-service';
import { google } from '@/protos/generated/google/protobuf/timestamp';
import { tiyuli } from '@/protos/generated/new_expense';
import { Metadata } from '@grpc/grpc-js';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const basicAuthToken = Buffer.from(`Oded:567`).toString('base64');
  const metadata = new Metadata();
  metadata.add('authorization', `Basic ${basicAuthToken}`);

  const response = await new Promise((resolve, reject) => {
    tiyuliClient.NewExpense(
      new tiyuli.expense.NewExpenseRequest({
        amount: 11,
        currency_code: 'USD',
        name: 'rent',
        note: 'tokyo rent',
        types: ['util'],
        payment_date: new google.protobuf.Timestamp(),
      }),
      metadata,
      (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      }
    );
  });

  return NextResponse.json({ id: (response as any).id });
}
