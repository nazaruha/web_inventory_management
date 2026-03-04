import { FC } from 'react'

interface InputGroupProps {
  label: string
  id: string
  name: string
  required?: boolean
  placeholder?: string
  type?: string
  step?: number
  min?: number
}

export const InputGroup: FC<InputGroupProps> = ({
  label,
  id,
  name,
  required = false,
  placeholder = 'Input Data',
  type = 'text',
  step,
  min,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label} {required ? '*' : '(optional)'}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        step={step}
        min={min}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent"
      />
    </div>
  )
}
