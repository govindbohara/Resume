import Link from 'next/link'

import * as styles from './social.styles'
import socials from './socialList'

export const Social = () => (
	<div className={styles.socials}>
		{socials.map(social => (
			<Link key={social.name} href={social.url ? social.url : '/'}>
				<a className={styles.socialLink}>
					{<social.icon color={social.color} />}
					<span>{social.name}</span>
				</a>
			</Link>
		))}
	</div>
)
