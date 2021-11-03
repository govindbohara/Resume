import { defaultLink } from 'src/styles/utils'
import { classnames } from 'tailwindcss-classnames'

export const socials = classnames('flex', 'items-center', 'mt-6', 'space-x-4')
export const socialLink = classnames(
	defaultLink,
	'p-2',
	'flex',
	'items-center',
	'gap-2',
	'bg-gray-800',
	'hover:bg-opacity-75',
	'lg:bg-gray-900',
	'lg:px-4',
	'lg:py-2'
)
