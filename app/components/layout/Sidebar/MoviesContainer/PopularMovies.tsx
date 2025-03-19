import React, { FC } from 'react'
import { useQuery } from 'react-query'

import { MovieService } from '@/services/movie.service'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import MoviesList from './MoviesList'

const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery('Popular movies in sidebar', () =>
		MovieService.getMostPopularMovies()
	)

	return isLoading
	? <div className='mt-16'>
		<SkeletonLoader count={3} className='h-28 mb-4' />
	</div>
	: <MoviesList link='/trending' movies={popularMovies || {}}  title='Popular movies'/>
}

export default PopularMovies
