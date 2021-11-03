import { GetServerSideProps, NextPage } from 'next'
import { IProject } from 'src/types/project'

import { About } from '~components/About/About'
import { Contact } from '~components/Contact/Contact'
import { Footer } from '~components/Footer'
import { Header } from '~components/Header'
import { Layout } from '~components/Layout'
import { ProjectList } from '~components/Projects/ProjectList'
import { Tab } from '~components/Tab'

type HomePageProps = {
	projects: IProject[]
}

const Homepage: NextPage<HomePageProps> = ({ projects }) => {
	return (
		<Layout>
			<Header />
			<About />
			<ProjectList projects={projects} />
			<Contact />
			<Footer />
			<Tab />
		</Layout>
	)
}
export const getServerSideProps: GetServerSideProps = async () => {
	const BASE_URL = 'https://raw.githubusercontent.com/govindbohara/projects/main'
	const response = await fetch(`${BASE_URL}/db.json`)
	const data = (await response.json()) as IProject[]
	const projects: IProject[] = data.map(item => ({
		...item,
		imagePreview: `${BASE_URL}${item.imagePreview.replace('.', '')}`,
		techStack: item.techStack.map(stack => ({
			...stack,
			icon: `${BASE_URL}${stack.icon.replace('.', '')}`,
		})),
	}))
	return {
		props: {
			projects,
		},
	}
}
export default Homepage
