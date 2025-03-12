import { FC } from 'react'

import { usePopularGenres } from './usePopularGenres'

const GenresMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()
	return <div>GenresMenu</div>
}

export default GenresMenu
