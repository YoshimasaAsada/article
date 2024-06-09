'use client'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import InputComponent from './InputComponent'

type Inputs = {
	name: string
	gender: string
	password: string
}

export const FormContextPrc = () => {
	const methods = useForm<Inputs>({
		defaultValues: {
			name: 'test',
			password: 'password',
		},
	})

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data)
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<InputComponent registerValue={'name'} />
				<InputComponent registerValue={'password'} />
				<button type="submit">送信</button>
			</form>
		</FormProvider>
	)
}
