import { IProject } from 'src/types/project'

import { ProjectListItem } from '~components/Projects/ProjectListItem'

type ProjectListProps = {
	projects: IProject[]
}
export const ProjectList = ({ projects }: ProjectListProps) => {
	return (
		<div className='section' id='projects'>
			<h3 className='text-4xl font-semibold'>☑️ Recent Projects</h3>
			<p className='mt-4 mb-12 text-lg text-gray-400'>
				Here are some of my projects that i have recently worked on
			</p>
			<div className='grid grid-cols-1 gap-12 mt-8 lg:grid-cols-3'>
				{projects.map(project => (
					<ProjectListItem key={project.name} project={project} />
				))}
			</div>
		</div>
	)
}
