import { Tween } from 'react-gsap'

import { Social } from '~components/Social/Social'

import * as styles from './introduction.styles'

export const Introduction = () => (
	<main className={styles.main}>
		<h2 className={styles.headingOne}>{`👋 Hello there, I'm-`}</h2>
		<h1 className={styles.headingTwo}>Govind Bohara.</h1>
		<p className={styles.textBox}>
			<span className='block text-md text-gray-400 font-semibold leading-8 lg:text-lg lg:leading-8'>
				Welcome to my website. Here you can get to know about me, projects I have made and
				ways to contact me. I really like creating websites and bringing your ideas to
				ideas to life.
			</span>
		</p>
		<Social />
	</main>
)
