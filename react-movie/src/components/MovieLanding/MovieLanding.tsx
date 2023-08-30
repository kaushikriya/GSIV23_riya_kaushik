import { useGetMovies } from "../../hooks/useGetMovies"
import { Movie } from "../../interfaces/movie"
import { MovieCard } from "../MovieCard/MovieCard"

export const MovieLanding=()=>{

    const {data: movies}= useGetMovies()
    console.log('I crazy')
    return(
        <div>
            {movies && movies.length>0? movies.map((movie: Partial<Movie>)=><MovieCard movie={movie}/>
            ): null}
        </div>
    )
}      