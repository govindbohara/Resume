import { Introduction } from '~components/Introduction/Introduction'
import { Navbar } from '~components/Navbar/Navbar'

export const Header = () => (
	<header className='relative min-h-screen p-6 bg-cover bg-none lg:px-36 lg:py-12 lg:bg-hero'>
		<Navbar />
		<Introduction />
	</header>
)
