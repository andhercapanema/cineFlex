import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function SuccessPage({
    chosenMovie,
    chosenDay,
    chosenHour,
    requestInfo,
    resetBooking,
}) {
    const selectedSeats = requestInfo.map((ticket) => ticket.seat.name);
    const navigate = useNavigate();

    function endBooking() {
        resetBooking();
        navigate("/");
    }

    return (
        <S.StyledSuccessPage>
            <h2>Pedido feito com sucesso!</h2>
            <strong>Filme e sessão</strong>
            <p data-identifier="movie-session-infos-reserve-finished">
                {chosenMovie.title}
            </p>
            <p data-identifier="movie-session-infos-reserve-finished">
                {chosenDay} {chosenHour}
            </p>
            <strong>Ingressos</strong>
            {selectedSeats.map((seat) => (
                <p data-identifier="seat-infos-reserve-finished">
                    Assento {seat}
                </p>
            ))}
            <strong>Compradores</strong>
            {requestInfo.map((ticket) => (
                <div key={ticket.seat.id}>
                    <p>Nome: {ticket.name}</p>
                    <p>CPF: {ticket.cpf}</p>
                </div>
            ))}
            <button onClick={endBooking} data-identifier="back-to-home-btn">
                Voltar para Home
            </button>
        </S.StyledSuccessPage>
    );
}

export default SuccessPage;
