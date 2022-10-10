import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import * as S from "./style";
import Footer from "../../components/Footer/Footer";

function SessionsPage({ setChosenSession, chosenMovie }) {
    const [sessions, setSessions] = useState(null);
    const { idMovie } = useParams();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`;

        axios
            .get(URL)
            .then((res) => {
                setSessions(res.data.days);
                // console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [idMovie]);

    if (sessions === null) {
        return <LoadingPage />;
    }

    console.log("chosenMovie", chosenMovie);

    return (
        <>
            <S.StyledSessionsPage>
                <h2>Selecione o horário</h2>
                {sessions.map((day) => (
                    <S.SessionDay key={day.id}>
                        <h3 data-identifier="session-date">
                            {day.weekday} - {day.date}
                        </h3>
                        {day.showtimes.map((session) => (
                            <Link
                                to={`/assentos/${session.id}`}
                                key={session.id}
                            >
                                <button
                                    onClick={() =>
                                        setChosenSession({ day, session })
                                    }
                                    data-identifier="hour-minute-btn"
                                >
                                    {session.name}
                                </button>
                            </Link>
                        ))}
                    </S.SessionDay>
                ))}
            </S.StyledSessionsPage>
            <Footer chosenMovie={chosenMovie} />
        </>
    );
}

export default SessionsPage;
