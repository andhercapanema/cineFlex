import React from "react";
import * as S from "./style";

function Footer({ chosenMovie: { posterURL, title }, chosenSession = null }) {
    return (
        <S.StyledFooter>
            <S.ImgCard>
                <img src={posterURL} alt={`Capa do filme ${title}`} />
            </S.ImgCard>
            <S.ChosenMovieInfo>
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
