import React from "react";
import * as S from "./style";

function Footer({ chosenMovie: { posterURL, title } }) {
    return (
        <S.StyledFooter>
            <S.ImgCard>
                <img src={posterURL} alt={`Capa do filme ${title}`} />
            </S.ImgCard>
            <S.ChosenMovieInfo>
                <h2>{title}</h2>
                <h2>Quinta-feira - 15:00</h2>
            </S.ChosenMovieInfo>
        </S.StyledFooter>
    );
}

export default Footer;
