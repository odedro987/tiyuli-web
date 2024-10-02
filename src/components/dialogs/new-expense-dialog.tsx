'use client'
import { CURRENCY_CODES, EXPENSE_TYPES } from '@/lib/consts'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Dialog } from '../dialog'
import { Select } from '../select'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

type Inputs = {
  name: string
  note: string
  type: string
  currencyCode: string
  amount: number
}

const NewExpenseDialog = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      currencyCode: 'jpy',
      type: 'miscellaneous',
    },
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <Dialog trigger="Create new expense" title="New expense" onSubmit={handleSubmit(onSubmit)}>
      <form>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-2 col-span-3">
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register('name')} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="note">Amount</Label>
            <Input {...register('amount')} type="tel" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Currency</Label>
            <Controller
              control={control}
              name="currencyCode"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select onChange={onChange} value={value} options={CURRENCY_CODES} />
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Type</Label>
            <Controller
              control={control}
              name="type"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select onChange={onChange} value={value} options={EXPENSE_TYPES} />
              )}
            />
          </div>
          <div className="flex flex-col gap-2 col-span-3">
            <Label htmlFor="note">Note</Label>
            <Input id="note" {...register('note')} />
          </div>
        </div>
      </form>
    </Dialog>
  )
}

export default NewExpenseDialog
