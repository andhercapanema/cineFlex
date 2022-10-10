import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import * as S from "./style";

function SeatsPage({
    selectedSeats,
    setSelectedSeats,
    form,
    setForm,
    finishBooking,
}) {
    const [seats, setSeats] = useState(null);
    const { idSession } = useParams();
    const navigate = useNavigate();
    let selectedSeatsId = selectedSeats.map((seat) => seat.id);

    const seatColor = (seat) => {
        if (selectedSeatsId.includes(seat.id)) return "GREEN";
        if (seat.isAvailable) return "GREY";
        return "YELLOW";
    };

    const selectSeat = (seat) => {
        const { id, isAvailable } = seat;

        if (selectedSeatsId.includes(id)) {
            const updatedSelectedSeats = selectedSeats.filter(
                (selected) => selected.id !== id
            );
            setSelectedSeats(updatedSelectedSeats);
            return;
        }

        if (!isAvailable) return alert("Esse assento não está disponível!");

        setSelectedSeats([...selectedSeats, seat]);
    };

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const seatsURL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`;

        axios
            .get(seatsURL)
            .then((res) => {
                setSeats(res.data.seats);
                console.log(res.data.seats);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [idSession]);

    const bookSeats = (e) => {
        e.preventDefault();

        const bookingURL =
            "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";

        axios
            .post(bookingURL, { ...form, ids: selectedSeatsId })
            .then((res) => {
                finishBooking();
                navigate("/sucesso");
                console.log(res);
            })
            .catch((err) => {
                console.error(err.response);
            });
    };

    if (seats === null) {
        return <LoadingPage />;
    }

    return (
        <S.StyledSeatsPage>
            <h2>Selecione o(s) assento(s)</h2>
            <S.SessionMap>
                {seats.map((seat) => (
                    <S.Seat
                        key={seat.id}
                        color={seatColor(seat)}
                        onClick={() => selectSeat(seat)}
                        disabled={!seat.isAvailable}
                    >
                        <p>{seat.name}</p>
                    </S.Seat>
                ))}
            </S.SessionMap>
            <S.SeatsLabel>
                <S.LabelDescription>
                    <S.Seat color={"GREEN"} disabled={true}></S.Seat>
                    <p>Selecionado</p>
                </S.LabelDescription>
                <S.LabelDescription>
                    <S.Seat color={"GREY"} disabled={true}></S.Seat>
                    <p>Disponível</p>
                </S.LabelDescription>
                <S.LabelDescription>
                    <S.Seat color={"YELLOW"} disabled={true}></S.Seat>
                    <p>Indisponível</p>
                </S.LabelDescription>
            </S.SeatsLabel>
            <S.BookingForm onSubmit={bookSeats}>
                <S.StyledInput>
                    <label htmlFor="name">Nome do comprador:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={form.name}
                        onChange={handleForm}
                        placeholder="Digite seu nome..."
                        required
                    />
                </S.StyledInput>
                <S.StyledInput>
                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input
                        type="number"
                        name="cpf"
                        id="cpf"
                        value={form.cpf}
                        onChange={handleForm}
                        placeholder="Digite seu CPF..."
                        required
                    />
                </S.StyledInput>
                <button type="submit">Reservar assento(s)</button>
            </S.BookingForm>
        </S.StyledSeatsPage>
    );
}

export default SeatsPage;
