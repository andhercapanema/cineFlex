import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";

function MoviesPage() {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex";
    const [movies, setMovies] = useState([]);

    axios
        .get(`${URL}/movies`)
        .then((res) => {
            console.log(res.data);
            setMovies(res.data);
        })
        .catch((err) => {
            console.error(err);
        });

    return (
        <S.StyledMoviesPage>
            <h2>Selecione o filme</h2>
            <S.MoviesSection>
                {movies.map((movie) => (
                    <S.MovieCover>
                        <img
                            src={movie.posterURL}
                            alt={`Capa filme ${movie.title}`}
                        ></img>
                    </S.MovieCover>
                ))}
            </S.MoviesSection>
        </S.StyledMoviesPage>
    );
}

export default MoviesPage;
