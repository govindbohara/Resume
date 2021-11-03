import { useFormik } from 'formik'
import Image from 'next/image'
import toast from 'react-hot-toast'
import * as Yup from 'yup'

import * as styles from './contact.style'

interface ContactForm {
	email: string
	subject: string
	message: string
}
const initialValues: ContactForm = {
	email: '',
	subject: '',
	message: '',
}
const validationSchema = Yup.object().shape({
	email: Yup.string().email('Please enter a valid email address').required(),
	subject: Yup.string().min(6).max(60).required(),
	message: Yup.string().min(6).required(),
})
export const Contact = () => {
	const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async values => {
			const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/sendEmail`
			const promise = fetch(apiUrl, {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify(values),
			})
			toast.promise(
				promise,
				{
					loading: 'Sending email.Please wait',
					success: 'Thank you for contacting.I will get back to you soon',
					error: 'Something went wrong.Please try again later',
				},
				{ style: { maxWidth: '35rem' } }
			)
			resetForm()
		},
	})
	return (
		<div className='section' id='contact'>
			<h2 className={styles.contactHeading}>💬 Contact Me..</h2>
			<p className={styles.contactDesc}>
				I am eager to discuss your business needs,and answer any questions you may
				have.Enter your message and I&apos;ll get back to you shortly
			</p>
			<div className={styles.formContainer}>
				<Image
					src='/images/contact.svg'
					width={600}
					height={300}
					objectFit='cover'
					alt='Contact page '
					className='rounded-md'
				/>
				<form className='mt-8 contact' onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='email' className='label'>
							Email
						</label>
						<input
							type='email'
							autoComplete='off'
							{...getFieldProps('email')}
							id='email'
							className='input'
						/>
						{touched.email && errors.email ? <p className='error'>{errors.email}</p> : ''}
					</div>
					<div className='form-control'>
						<label htmlFor='subject' className='label'>
							Subject
						</label>
						<input
							type='text'
							autoComplete='off'
							{...getFieldProps('subject')}
							id='subject'
							className='input'
						/>
						{touched.subject && errors.subject ? (
							<p className='error'>{errors.subject}</p>
						) : (
							''
						)}
					</div>
					<div className='form-control'>
						<label htmlFor='message' className='label'>
							Message
						</label>
						<textarea
							id='message'
							autoComplete='off'
							className='resize-none input'
							{...getFieldProps('message')}
							cols={30}
							rows={5}
						/>
						{touched.message && errors.message ? (
							<p className='error'>{errors.message}</p>
						) : (
							''
						)}
					</div>
					<button
						type='submit'
						className='w-full text-white bg-green-700 link hover:bg-green-800'
					>
						Contact Me
					</button>
				</form>
			</div>
		</div>
	)
}
