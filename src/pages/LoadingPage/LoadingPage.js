import React from "react";
import { StyledLoadingPage } from "./style";
import loaginGif from "../../assets/imgs/spinner-1s-200px.svg";

function LoadingPage() {
    return (
        <StyledLoadingPage>
            <img src={loaginGif} alt="Carregando..." />
            <h2>Carregando...</h2>
        </StyledLoadingPage>
    );
}

export default LoadingPage;
