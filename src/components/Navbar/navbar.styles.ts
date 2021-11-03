// .navbar {
// 	@apply fixed top-0 left-0 flex items-center justify-between w-full p-6 transition-all duration-500 lg:px-36 lg:py-6;
// }
// .button {
// 	@apply hover:bg-gray-800 hover:bg-opacity-75;
// }
// .blurred {
// 	@apply z-10 bg-gray-900 bg-opacity-75 shadow-md backdrop-blur-md;
// }
import { defaultLink } from 'src/styles/utils'
import { classnames } from 'tailwindcss-classnames'

const blurred = classnames(
	'z-10',
	'bg-gray-900',
	'bg-opacity-75',
	'shadow-md',
	'backdrop-blur-md'
)
export const navbar = (isBlurred: boolean) =>
	classnames(
		'fixed',
		'top-0',
		'left-0',
		'flex',
		'items-center',
		'justify-between',
		'w-full',
		'p-4',
		'transition-all',
		'duration-500',
		'hidden',
		'lg:flex',
		'lg:px-36',
		'lg:py-6',
		{ [blurred]: isBlurred }
	)
export const button = classnames(
	defaultLink,
	'px-4',
	'py-2',
	'hover:bg-gray-800',
	'hover:bg-opacity-75'
)
