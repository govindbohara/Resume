import { motion } from 'framer-motion'

import { Social } from '~components/Social/Social'

import * as styles from './introduction.styles'

const container = {
	hidden: { translateY: '-30%' },
	show: {
		translateY: '-50%',
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.4,
			duration: 0.4,
			ease: 'linear',
		},
	},
}
const item = {
	hidden: { opacity: 0, y: 50 },
	show: { opacity: 1, y: 0, transition: { transition: 0.6 } },
}
export const Introduction = () => (
	<motion.main
		initial='hidden'
		animate='show'
		variants={container}
		className={styles.main}
	>
		<motion.h2 variants={item} className={styles.headingOne}>
			{`👋 Hello there, I'm-`}
		</motion.h2>
		<motion.h1 variants={item} className={styles.headingTwo}>
			Govind Bohara.
		</motion.h1>
		<motion.p variants={item} className={styles.textBox}>
			<span className={styles.text}>
				Welcome to my website. Here you can get to know about me, projects I have made and
				ways to contact me. I really like creating websites and bringing your ideas to
				ideas to life.
			</span>
		</motion.p>
		<Social />
	</motion.main>
)
