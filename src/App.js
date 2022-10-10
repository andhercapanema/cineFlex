import React, { useState } from "react";
import Header from "./components/Header/Header";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

function App() {
    const [chosenMovie, setChosenMovie] = useState(null);
    const [chosenSession, setChosenSession] = useState(null);
    const [requestInfo, setRequestInfo] = useState([]);

    function resetBooking() {
        setChosenMovie(null);
        setChosenSession({
            day: { weekday: null },
            session: { name: null },
        });
        setRequestInfo([]);
    }

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header resetBooking={resetBooking} />
            <Routes>
                <Route
                    path="/"
                    element={<MoviesPage setChosenMovie={setChosenMovie} />}
                />
                <Route
                    path="/sessoes/:idMovie"
                    element={
                        <SessionsPage
                            setChosenSession={setChosenSession}
                            chosenMovie={chosenMovie}
                        />
                    }
                />
                <Route
                    path="/assentos/:idSession"
                    element={
                        <SeatsPage
                            form={requestInfo}
                            setForm={setRequestInfo}
                            chosenMovie={chosenMovie}
                            chosenSession={chosenSession}
                        />
                    }
                />
                <Route
                    path="/sucesso"
                    element={
                        <SuccessPage
                            chosenMovie={chosenMovie}
                            chosenDay={chosenSession?.day?.date}
                            chosenHour={chosenSession?.session?.name}
                            requestInfo={requestInfo}
                            resetBooking={resetBooking}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
