import { classnames } from 'tailwindcss-classnames'

export const contactHeading = classnames('mb-6', 'text-4xl', 'font-semibold')

export const contactDesc = classnames(
	'max-w-lg',
	'text-lg',
	'leading-8',
	'text-gray-400',
	'mb-6',
	'lg:mb-12',
	'lg:leading-8',
	'lg:text-xl'
)
export const formContainer = classnames(
	'flex',
	'flex-col',
	'items-center',
	'justify-between',
	'lg:flex-row'
)
