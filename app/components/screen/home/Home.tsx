import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading title="Watch movies online" className="text-gray-500 mb-8 text-xl" />
			<h1>Home</h1>
		</Meta>
	)
}

export default Home
