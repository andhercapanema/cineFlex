import React, { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import LoadingPage from "../LoadingPage/LoadingPage";
import { Link } from "react-router-dom";

function MoviesPage({ setChosenMovie }) {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex";

        axios
            .get(`${URL}/movies`)
            .then((res) => {
                // console.log(res.data);
                setMovies(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    if (movies === null) {
        return <LoadingPage />;
    }

    return (
        <S.StyledMoviesPage>
            <h2>Selecione o filme</h2>
            <S.MoviesSection>
                {movies.map((movie) => (
                    <Link to={`/sessoes/${movie.id}`} key={movie.id}>
                        <S.MovieCover
                            onClick={() => setChosenMovie(movie)}
                            data-identifier="movie-outdoor"
                        >
                            <img
                                src={movie.posterURL}
                                alt={`Capa filme ${movie.title}`}
                            />
                        </S.MovieCover>
                    </Link>
                ))}
            </S.MoviesSection>
        </S.StyledMoviesPage>
    );
}

export default MoviesPage;
