import Link from 'next/link'
import { useEffect, useState } from 'react'
import { scrollToEl } from 'src/utils/scrollToEl'

import * as styles from './navbar.styles'
import routes from './routes'

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	/** Scroll to the given element as refrenced by its id whenver corresponding link is clicked */
	const handleLinkClick = (id: string) => {
		scrollToEl(id)
	}
	const routeList = routes.map(route => (
		<li key={route.name}>
			<button
				type='button'
				className={styles.button}
				onClick={() => handleLinkClick(route.sectionId)}
			>
				{route.name}
			</button>
		</li>
	))
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [isScrolled])
	return (
		<nav className={styles.navbar(isScrolled)}>
			<Link href='/'>
				<a className='text-2xl font-semibold'>{`<G/>`}</a>
			</Link>
			<ul className='flex space-x-6'>{routeList}</ul>
		</nav>
	)
}
