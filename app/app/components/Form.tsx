'use client'
import { useEffect } from 'react'
import { SubmitHandler, useForm, useWatch } from 'react-hook-form'

type Inputs = {
  color: string
  gender: string
}

export default function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<Inputs>()

  const gender = useWatch({
    control,
    name: 'gender',
  })

  useEffect(() => {
    if (gender === '0') {
      setValue('color', 'blue')
    } else if (gender === '1') {
      setValue('color', 'red')
    }
  }, [gender, setValue])

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input
          type="radio"
          value={0}
          {...register('gender', { required: true })}
        />
        men
      </label>

      <label>
        <input
          type="radio"
          value={1}
          {...register('gender', { required: true })}
        />
        women
      </label>

      <br />

      <input {...register('color', { required: true })} defaultValue="white" />

      <input type="submit" />
    </form>
  )
}
