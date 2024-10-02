'use client'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  Dialog as DialogShadcn,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { VariantProps } from 'class-variance-authority'
import { LucideLoaderCircle } from 'lucide-react'
import { ReactNode, useState } from 'react'

interface DialogProps {
  trigger: string
  triggerVariant?: VariantProps<typeof buttonVariants>
  title?: string
  description?: string
  submitButtonText?: string
  cancelButtonText?: string
  showSubmitButton?: boolean
  showCancelButton?: boolean
  className?: string
  disabled?: boolean
  loading?: boolean
  onSubmit?: () => {}
  onCancel?: () => {}
  children: ReactNode
}

export function Dialog(props: DialogProps) {
  const [open, setOpen] = useState(false)
  const {
    trigger,
    triggerVariant = { variant: 'default', size: 'default' },
    title,
    description = '',
    submitButtonText = 'Save',
    cancelButtonText = 'Cancel',
    showCancelButton = true,
    showSubmitButton = true,
    className,
    disabled = false,
    loading = false,
    onSubmit = () => {},
    onCancel = () => {},
    children,
  } = props

  return (
    <DialogShadcn open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={triggerVariant.variant} size={triggerVariant.size}>
          {trigger}
        </Button>
      </DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>
          {showCancelButton && (
            <Button
              onClick={() => {
                onCancel()
                setOpen(false)
              }}
              type="button"
              variant="secondary"
            >
              {cancelButtonText}
            </Button>
          )}
          {showSubmitButton && (
            <Button
              type="submit"
              disabled={disabled}
              onClick={() => {
                onSubmit()
                setOpen(false)
              }}
            >
              {loading ? <LucideLoaderCircle className="size-4 animate-spin" /> : submitButtonText}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </DialogShadcn>
  )
}
