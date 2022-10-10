import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import * as S from "./style";
import Footer from "../../components/Footer/Footer";

function SeatsPage({ form, setForm, chosenMovie, chosenSession }) {
    const [seats, setSeats] = useState(null);
    const { idSession } = useParams();
    const navigate = useNavigate();
    let selectedSeatsId = form.map((ticket) => ticket.seat.id);

    const seatColor = (seat) => {
        if (selectedSeatsId.includes(seat.id)) return "GREEN";
        if (seat.isAvailable) return "GREY";
        return "YELLOW";
    };

    const selectSeat = (seat) => {
        const { id, isAvailable } = seat;

        const ticketSelectedSeat = form.filter(
            (ticket) => ticket.seat.id === id
        )[0];
        const inputsAreFilled =
            ticketSelectedSeat?.name !== "" || ticketSelectedSeat?.cpf !== "";

        if (selectedSeatsId.includes(id)) {
            let confirmed = true;

            if (inputsAreFilled) {
                confirmed = window.confirm(
                    "Você realmente quer remover este assento? A remoção apagará os dados preenchidos para este assento!"
                );
            }

            if (confirmed) {
                const updatedForm = form.filter(
                    (ticket) => ticket.seat.id !== id
                );
                setForm(updatedForm);
                return;
            }

            return;
        }

        if (!isAvailable) return alert("Esse assento não está disponível!");

        setForm([...form, { seat: seat, name: "", cpf: "" }]);
    };

    const handleForm = (e, seat, index) => {
        form[index] = {
            ...form[index],
            [e.target.name]: e.target.value,
        };
        setForm([...form]);
    };

    useEffect(() => {
        const seatsURL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`;

        axios
            .get(seatsURL)
            .then((res) => {
                setSeats(res.data.seats);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [idSession]);

    const bookSeats = (e) => {
        e.preventDefault();

        const bookingURL =
            "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
        const body = {
            ids: form.map((ticket) => ticket.seat.id),
            compradores: form.map((ticket) => {
                return {
                    name: ticket.name,
                    cpf: ticket.cpf,
                    idAssento: ticket.seat.id,
                };
            }),
        };

        axios
            .post(bookingURL, body)
            .then((res) => {
                navigate("/sucesso");
            })
            .catch((err) => {
                console.error(err.response);
            });
    };

    if (seats === null) {
        return <LoadingPage />;
    }

    return (
        <>
            <S.StyledSeatsPage>
                <h2>Selecione o(s) assento(s)</h2>
                <S.SessionMap>
                    {seats.map((seat) => (
                        <S.Seat
                            key={seat.id}
                            color={seatColor(seat)}
                            onClick={() => selectSeat(seat)}
                            disabled={!seat.isAvailable}
                            data-identifier="seat"
                        >
                            <p>{seat.name}</p>
                        </S.Seat>
                    ))}
                </S.SessionMap>
                <S.SeatsLabel>
                    <S.LabelDescription>
                        <S.Seat
                            color={"GREEN"}
                            disabled={true}
                            data-identifier="seat-selected-subtitle"
                        ></S.Seat>
                        <p>Selecionado</p>
                    </S.LabelDescription>
                    <S.LabelDescription>
                        <S.Seat
                            color={"GREY"}
                            disabled={true}
                            data-identifier="seat-available-subtitle"
                        ></S.Seat>
                        <p>Disponível</p>
                    </S.LabelDescription>
                    <S.LabelDescription>
                        <S.Seat
                            color={"YELLOW"}
                            disabled={true}
                            data-identifier="seat-unavailable-subtitle"
                        ></S.Seat>
                        <p>Indisponível</p>
                    </S.LabelDescription>
                </S.SeatsLabel>
                <S.BookingForm onSubmit={bookSeats}>
                    {form.map((ticket, index) => (
                        <S.StyledInputs key={index}>
                            {form.length > 1 && (
                                <>
                                    <strong>
                                        {index + 1}º Ingresso: Assento{" "}
                                        {form[index].seat.name}
                                    </strong>
                                    <br />
                                </>
                            )}
                            <label htmlFor="name">Nome completo *</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={form[index].name}
                                onChange={(e) =>
                                    handleForm(e, form[index].seat, index)
                                }
                                placeholder="Digite seu nome..."
                                required
                                data-identifier="buyer-name-input"
                            />
                            <label htmlFor="cpf">CPF *</label>
                            <input
                                type="number"
                                name="cpf"
                                id="cpf"
                                value={form[index].cpf}
                                onChange={(e) =>
                                    handleForm(e, form[index].seat, index)
                                }
                                placeholder="Digite seu CPF..."
                                required
                                data-identifier="buyer-cpf-input"
                            />
                        </S.StyledInputs>
                    ))}
                    <button type="submit" data-identifier="reservation-btn">
                        Reservar assento(s)
                    </button>
                </S.BookingForm>
            </S.StyledSeatsPage>
            <Footer chosenMovie={chosenMovie} chosenSession={chosenSession} />
        </>
    );
}

export default SeatsPage;
