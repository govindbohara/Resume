import Image from 'next/image'

import { Skills } from '~components/Skills/Skills'

export const About = () => (
	<div className='section min-h-screen center lg:flex-row' id='about'>
		<div>
			<span className='inline-block my-8 text-4xl font-bold'>🙍 About Me</span>
			<div className='max-w-xl space-y-6 text-lg'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat qui in
					asperiores, labore iste nesciunt libero enim. At, odit!
				</p>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, iste!</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure quos
					corrupti magnam nulla vero nihil itaque sunt ipsam sapiente.
				</p>
			</div>
			<Skills />
		</div>
		<Image
			src='/images/gole.jpg'
			width={300}
			height={300}
			objectFit='cover'
			alt='Profile Image'
			className='rounded-full shadow-md'
		/>
	</div>
)
