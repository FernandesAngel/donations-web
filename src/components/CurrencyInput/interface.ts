import { InputHTMLAttributes } from 'react'
import { Control } from 'react-hook-form'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  control: Control<any>
  nameInput: string | number
}
