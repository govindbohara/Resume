import { FcAbout } from 'react-icons/fc'
import { IoMdCodeWorking, IoMdContact } from 'react-icons/io'
import { scrollToEl } from 'src/utils/scrollToEl'

const tabRoutes = [
	{
		name: 'Projects',
		icon: IoMdCodeWorking,
		scrollId: '#projects',
	},
	{
		name: 'About Me',
		icon: FcAbout,
		scrollId: '#about',
	},
	{
		name: 'Contact',
		icon: IoMdContact,
		scrollId: '#contact',
	},
]
export const Tab = () => {
	return (
		<div className='fixed bottom-0 left-0 px-6 py-2 w-full visible md:hidden'>
			<div className='flex justify-between items-center bg-gray-900/75 backdrop-blur-md shadow-xl rounded-2xl p-3'>
				{tabRoutes.map(tabRoute => (
					<div
						key={tabRoute.name}
						className='flex flex-col items-center rounded-2xl'
						onClick={() => scrollToEl(tabRoute.scrollId)}
					>
						{<tabRoute.icon className='text-2xl' />}
						<p className='text-md mt-2 font-semibold'>{tabRoute.name}</p>
					</div>
				))}
			</div>
		</div>
	)
}
