import { axiosClassic } from 'api/interseptors'
import { getMoviesUrl } from 'config/api.config'

import { IMovie } from '@/shared/types/movie.types'

export const MovieService = {
	async getAll(searchTeam?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTeam ? { searchTeam } : {},
		})
	},
}
