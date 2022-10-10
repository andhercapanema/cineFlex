import React from "react";
import * as S from "./style";

function Footer({ chosenMovie: { posterURL, title }, chosenSession = null }) {
    return (
        <S.StyledFooter>
            <S.ImgCard data-identifier="movie-img-preview">
                <img src={posterURL} alt={`Capa do filme ${title}`} />
            </S.ImgCard>
            <S.ChosenMovieInfo data-identifier="movie-and-session-infos-preview">
                <h2>{title}</h2>
                {chosenSession && (
                    <h2>
                        {chosenSession.day.weekday} -{" "}
                        {chosenSession.session.name}
                    </h2>
                )}
            </S.ChosenMovieInfo>
        </S.StyledFooter>
    );
}

export default Footer;
