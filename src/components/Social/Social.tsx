import { AnimationProps, motion } from 'framer-motion'
import Link from 'next/link'

import * as styles from './social.styles'
import socials from './socialList'

const container: AnimationProps['variants'] = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 1,
			staggerChildren: 0.4,
			duration: 0.6,
			when: 'beforeChildren',
			ease: 'linear',
		},
	},
}
const item: AnimationProps['variants'] = {
	hidden: {
		opacity: 0,
		y: 30,
	},
	show: {
		opacity: 1,
		y: 0,
	},
}
export const Social = () => (
	<motion.div
		initial='hidden'
		animate='show'
		variants={container}
		className={styles.socials}
	>
		{socials.map(social => (
			<Link key={social.name} passHref href={social.url ? social.url : '/'}>
				<motion.a variants={item} className={styles.socialLink}>
					{<social.icon color={social.color} />}
					<span>{social.name}</span>
				</motion.a>
			</Link>
		))}
	</motion.div>
)
