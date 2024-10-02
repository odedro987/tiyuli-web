import {
  SelectContent,
  SelectGroup,
  SelectItem,
  Select as SelectShadcn,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface SelectProps {
  placeholder?: string
  options: Record<'label' | 'value', string>[]
  className?: string
  onChange?: any
  value?: string
}

export function Select(props: SelectProps) {
  const { placeholder = 'Pick...', options, value, className, onChange = () => {} } = props

  return (
    <SelectShadcn onValueChange={onChange} value={value}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option, index) => {
            return (
              <SelectItem className="pr-1" key={index} value={option.value}>
                {option.label}
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </SelectShadcn>
  )
}
