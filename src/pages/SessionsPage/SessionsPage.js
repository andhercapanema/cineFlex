import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import * as S from "./style";

function SessionsPage() {
    const [sessions, setSessions] = useState(null);
    const { idMovie } = useParams();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`;

        axios
            .get(URL)
            .then((res) => {
                setSessions(res.data.days);
                console.log(res.data.days);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [idMovie]);

    if (sessions === null) {
        return <LoadingPage />;
    }

    return (
        <S.StyledSessionsPage>
            <h2>Selecione o horário</h2>
            {sessions.map((day) => (
                <S.SessionDay key={day.id}>
                    <h3>
                        {day.weekday} - {day.date}
                    </h3>
                    {day.showtimes.map((session) => (
                        <button key={session.id}>{session.name}</button>
                    ))}
                </S.SessionDay>
            ))}
        </S.StyledSessionsPage>
    );
}

export default SessionsPage;
