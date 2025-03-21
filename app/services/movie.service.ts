import { axiosClassic } from 'api/interceptors'
import { getMoviesUrl } from 'config/api.config'

import { IMovie } from '@/shared/types/movie.types'

export const MovieService = {
	async getAll(searchTeam?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTeam ? { searchTeam } : {},
		})
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(getMoviesUrl('/most-popular'))
		return movies
	},
}
