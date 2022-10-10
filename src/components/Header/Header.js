import React from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { StyledHeader } from "./style";

function Header({ resetBooking }) {
    const navigate = useNavigate();
    const isInMoviesPage = useMatch("/");
    const isInSuccessPage = useMatch("/sucesso");

    function returnToPreviousPage() {
        navigate(-1);
    }

    function endBooking() {
        resetBooking();
        navigate("/");
    }
    return (
        <StyledHeader>
            {!isInMoviesPage && !isInSuccessPage && (
                <ion-icon
                    name="arrow-back-circle"
                    onClick={returnToPreviousPage}
                ></ion-icon>
            )}
            <h1 onClick={endBooking}>CINEFLEX</h1>
        </StyledHeader>
    );
}

export default Header;
