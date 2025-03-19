import { getGenreUrl, getMovieUrl } from 'config/url.config'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { IMovie } from '@/shared/types/movie.types'

import { getGenreListEach } from '@/utils/movie/getGenreListEach'

import styles from './MovieList.module.scss'

const MoviesItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link legacyBehavior href={getMovieUrl(movie.slug)}>
				<a>
					<Image src={movie.poster} width={65} height={97} alt={movie.title} priority draggable={false} />
				</a>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map((genre, index) => (
							<Link legacyBehavior key={genre._id} href={getGenreUrl(genre.slug)}>
								<a>{getGenreListEach(index, movie.genres.length, genre.name)}</a>
							</Link>
						))}
					</div>
				</div>
				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MoviesItem
