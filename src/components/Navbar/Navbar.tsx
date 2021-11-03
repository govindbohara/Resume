import Link from 'next/link'
import { useEffect, useState } from 'react'
import { scrollToEl } from 'src/utils/scrollToEl'

import * as styles from './navbar.styles'
import routes from './routes'

export const Navbar = () => {
	const [scrollTop, setScrollTop] = useState(0)
	const [clickedId, setClickedId] = useState('')
	const [isScrolled, setIsScrolled] = useState(false)

	const routeList = routes.map(route => (
		<li key={route.name}>
			<button
				type='button'
				className={styles.button}
				onClick={() => setClickedId(route.sectionId)}
			>
				{route.name}
			</button>
		</li>
	))
	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.scrollY)
			if (scrollTop > 50) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [scrollTop])
	useEffect(() => {
		if (clickedId) {
			scrollToEl(clickedId)
		}
	}, [clickedId])
	return (
		<nav className={styles.navbar(isScrolled)}>
			<Link href='/'>
				<a className='text-2xl font-semibold'>{`<G/>`}</a>
			</Link>
			<ul className='flex space-x-6'>{routeList}</ul>
		</nav>
	)
}
