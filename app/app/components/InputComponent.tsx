'use client'
import React from 'react'
import { RegisterOptions, useFormContext } from 'react-hook-form'

type Inputs = {
  name: string
  gender: string
  password: string
}

interface InputComponentProps {
  registerValue: keyof Inputs
  registerOptions?: RegisterOptions
}

const InputComponent: React.FC<InputComponentProps> = ({
  registerValue,
  registerOptions,
}) => {
  const { register } = useFormContext<Inputs>()

  return (
    <div>
      <input {...register(registerValue, registerOptions)} />
    </div>
  )
}

export default InputComponent
