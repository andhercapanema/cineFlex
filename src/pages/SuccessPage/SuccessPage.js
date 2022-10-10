import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function SuccessPage({
    chosenMovie,
    chosenDay,
    chosenHour,
    selectedSeats,
    userInfo,
    resetBooking,
}) {
    const navigate = useNavigate();

    return (
        <S.StyledSuccessPage>
            <h2>Pedido feito com sucesso!</h2>
            <strong>Filme e sessão</strong>
            <p>{chosenMovie.title}</p>
            <p>
                {chosenDay} {chosenHour}
            </p>
            <strong>Ingressos</strong>
            {selectedSeats.map((seat) => (
                <p>Assento {seat}</p>
            ))}
            <strong>Comprador</strong>
            <p>Nome: {userInfo.name}</p>
            <p>CPF: {userInfo.cpf}</p>
            <button
                onClick={() => {
                    resetBooking();
                    navigate("/");
                }}
            >
                Voltar para Home
            </button>
        </S.StyledSuccessPage>
    );
}

export default SuccessPage;
