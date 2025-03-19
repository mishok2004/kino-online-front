import Link from 'next/link'
import { FC } from 'react'

import MoviesItem from './MovieItem'
import styles from './MovieList.module.scss'
import { IMovieList } from './moviesList.interface'

const MoviesList: FC<IMovieList> = ({ link, movies, title }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map((movie) => (
				<MoviesItem key={movie._id} movie={movie} />
			))}
			<Link legacyBehavior href={link}>
				<a className={styles.button}>See more</a>
			</Link>
		</div>
	)
}

export default MoviesList
