import { useMemo, useState } from "react";
import { useGetMovies } from "../../hooks/useGetMovies";
import { useSearchMovies } from "../../hooks/useSearchMovies/useSearchMovies";
import { Movie } from "../../interfaces/movie";
import { MovieCard } from "../MovieCard/MovieCard";
import SearchBar from "../SearchBar/SearchBar";

export const MovieLanding = () => {
  const [page, setPage] = useState<number>(1);
  const { data: popularMovies } = useGetMovies(page);
  const [searchInput, setSearchInput] = useState<string | undefined>();

  const { data: searchMovies } = useSearchMovies(searchInput);

  const handleSearch = (value: string | undefined) => {
    setSearchInput(value);
  };

  const movies = searchInput ? searchMovies : popularMovies;

  return (
    <div className="w-full">
      <SearchBar value={searchInput} handleChange={handleSearch} />
      <div className="grid grid-cols-5 gap-2">
        {movies && movies.length > 0
          ? movies.map((movie: Partial<Movie>, index: number) => (
              <div className="flex justify-center" key={index}>
                <MovieCard movie={movie} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
