import { Movie } from "../../interfaces/movie";

export const MovieCard=({movie}:{movie: Partial<Movie>})=>{

    return(
        <div>
            <div>
            <img src={movie.media} alt=''/>
            </div>
            <div >
            <p>{movie.title}</p>
            <p>{movie.description}</p>
            <p>{movie.rating}</p>
            </div>
           
        </div>
    )

}