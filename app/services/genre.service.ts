import { getGenresUrl } from 'config/api.config'

import { IGenre } from '@/shared/types/movie.types'
import { axiosClassic } from 'api/interseptors'

export const GenreService = {
	async getAll(searchTeam?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTeam
			? {searchTeam}
			: {}
		})
	}
}
