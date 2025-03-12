import Image from 'next/image'
import Link from 'next/link'

import logoImage from '@/assets/image/logo.svg'

const Logo = () => {
	return (
		<Link legacyBehavior href="/">
			<a className="px-layout mb-10 block">
				<Image
					alt="Cinema online "
					src={logoImage}
					width={246}
					height={34}
					draggable={false}
				/>
			</a>
		</Link>
	)
}

export default Logo
