import styled from "styled-components";

const moviesInARow = Math.floor((window.screen.width - 30) / (145 + 30));

export const StyledMoviesPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;

    h2 {
        margin: 45px 0 38px;

        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;
    }
`;

export const MoviesSection = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-left: 30px;
    width: ${moviesInARow * 175}px;
`;

export const MovieCover = styled.li`
    height: 209px;
    width: 145px;
    padding: 8px;
    margin-right: 30px;
    margin-bottom: 11px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    cursor: pointer;

    img {
        width: 129px;
        height: 193px;
    }
`;
