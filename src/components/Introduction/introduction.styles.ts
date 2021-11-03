import { classnames } from 'tailwindcss-classnames'

export const main = classnames('absolute', '-translate-y-1/2', 'top-1/2')
export const headingOne = classnames(
	'text-2xl',
	'font-semibold',
	'text-green-900',
	'lg:text-4xl'
)
export const headingTwo = classnames('mt-2', 'text-8xl', 'font-bold', 'lg:mt-0')
export const textBox = classnames('max-w-xl', 'mt-6', 'mb-12')
export const text = classnames(
	'block',
	'text-gray-400',
	'font-semibold',
	'leading-8',
	'lg:text-lg',
	'lg:leading-8'
)
