import Image from 'next/image'
import { FaFilePdf } from 'react-icons/fa'

import { Skills } from '~components/Skills/Skills'

export const About = () => {
	const handleClick = () => {
		window.open('/CV-Govind_Bohara.pdf')
	}
	return (
		<div className='min-h-screen section center' id='about'>
			<div className='flex flex-col-reverse items-center justify-between min-w-full lg:flex-row'>
				<div>
					<span className='inline-block my-8 text-4xl font-bold'>🙍 About Me</span>
					<div className='max-w-xl space-y-6 text-lg'>
						<p className='leading-8'>
							Hey It’s me Govind Bohara and I am a student at Islington college who just
							wants to be a developer. So I have learned some programming languages to be
							a developer.
						</p>
						<p>My hobbies is to code, sleep and eat. That’s the loop going in my life.</p>
						<p>
							And when I am not coding I am chilling and playing games with my friends.
						</p>
					</div>
					<Skills />
					<button
						type='button'
						onClick={handleClick}
						className='flex items-center gap-2 mt-12 text-white bg-green-700 link'
					>
						<FaFilePdf />
						<span>Download CV</span>
					</button>
				</div>
				<Image
					src='/images/gole.jpg'
					width={450}
					height={450}
					objectFit='cover'
					alt='Profile Image'
					className='flex rounded-full shadow-md'
				/>
			</div>
		</div>
	)
}
