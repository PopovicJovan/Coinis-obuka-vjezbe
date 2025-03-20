import {useEffect, useState} from "react";
import MovieCard from "../components/MovieCard.jsx";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const MainPage = () => {
    const [movies, setMovies] = useState();
    const [filteredMovies, setFilteredMovies] = useState();
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const perPage = 10;

    const fetchMovies = async () => {
        const request = await fetch("https://jsonblob.com/api/jsonBlob/1351950892655632384/");
        const response = await request.json();
        setMovies(response.movies);
        setFilteredMovies(response.movies);
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies();
    }, [])


    const handleInputChange = (e) => {
        setPage(1);
        setFilteredMovies(movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase())));
    }



    return (
        <div>
            <div className={"w-50 mx-auto d-flex justify-content-center align-items-center gap-3"}>
                <input type="text" className={"form-control my-3 w-50"} placeholder={"Search"} onChange={handleInputChange} />
                <button className={"h-25 btn btn-primary"} style={{"width": "100px"}} type={"button"}>Search</button>
            </div>
            <div className={"my-w-85 mx-auto d-flex justify-content-center flex-wrap gap-3 mt-5"}>
                {!loading && movies && filteredMovies.slice((page - 1) * perPage, page * perPage)
                    .map(movie => {
                        return (
                            <MovieCard title={movie.title}
                                       img={movie.img}
                                       rating={movie.imdb_rating}
                                       year={movie.year}
                                       genre={movie.genre}
                            />
                        )
                })}
            </div>
            <Stack alignItems={"center"} className={"mt-5"}>
                {movies && <Pagination count={
                    Number.isInteger(filteredMovies.length / perPage)
                        ? filteredMovies.length / perPage :
                        Math.ceil(filteredMovies.length / perPage)
                }
                                       className={"align-items-center"}
                                onChange={(_, v) => setPage(v)}
                    page={page}/>
                    }

            </Stack>
        </div>
    )
}

export default MainPage;