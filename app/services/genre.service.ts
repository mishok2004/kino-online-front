import { axiosClassic } from 'api/interceptors'
import { getGenresUrl } from 'config/api.config'

import { IGenre } from '@/shared/types/movie.types'

export const GenreService = {
	async getAll(searchTeam?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTeam ? { searchTeam } : {},
		})
	},
}
