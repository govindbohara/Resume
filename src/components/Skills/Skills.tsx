import skills from './skillList'

export const Skills = () => {
	return (
		<div className='mt-12'>
			<p className='mb-8 text-2xl'>
				I am Familar with following{' '}
				<span className='font-bold text-green-700 underline'>Technologies</span>
			</p>
			<div className='flex space-x-6 lg:space-x-12'>
				{skills.map(skill => (
					<div key={skill.name} className='text-2xl'>
						{<skill.icon className='text-4xl lg:text-6xl' fill={skill.color} />}
						<p className='mt-2 text-lg text-center lg:text-xl'>{skill.name}</p>
					</div>
				))}
			</div>
		</div>
	)
}
