import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { IProject } from 'src/types/project'

import TechStackList from '~components/TechStack/TechStackList'

type ProjectListItemProps = {
    project: IProject
}
export const ProjectListItem = ({ project }: ProjectListItemProps) => {
    const { name, description, hostedUrl, imagePreview, techStack, githubUrl } =
        project
    return (
        <div className='project-list-item'>
            <Image
                src={imagePreview}
                width={600}
                height={400}
                objectFit='cover'
                alt={name}
            />
            <div className='p-4'>
                <h4 className='mb-4 text-2xl font-semibold'>{name}</h4>
                <TechStackList stacks={techStack} />
                <p className='mt-4 text-lg text-gray-400'>{description}</p>
                <div className='flex items-center mt-6 space-x-4'>
                    <Link href={hostedUrl}>
                        <a target='_new' className='bg-green-900 external-link'>
                            <FaExternalLinkAlt />
                            <span>Live Demo</span>
                        </a>
                    </Link>
                    <Link href={githubUrl}>
                        <a
                            target='_new'
                            className='text-black bg-white external-link'
                        >
                            <FaGithub />
                            <span>Github</span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
