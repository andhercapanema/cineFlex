import React, { useState } from "react";
import Header from "./components/Header/Header";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

function App() {
    const [chosenMovie, setChosenMovie] = useState(null);
    // console.log(chosenMovie);
    const [chosenSession, setChosenSession] = useState({
        day: { weekday: null },
        session: { name: null },
    });
    // console.log(chosenSession);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [userInfo, setUserInfo] = useState({ name: "", cpf: "" });

    function resetBooking() {
        setChosenMovie(null);
        setChosenSession({
            day: { weekday: null },
            session: { name: null },
        });
        setSelectedSeats([]);
        setUserInfo({ name: "", cpf: "" });
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
                            selectedSeats={selectedSeats}
                            setSelectedSeats={setSelectedSeats}
                            form={userInfo}
                            setForm={setUserInfo}
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
                            chosenDay={chosenSession.day.date}
                            chosenHour={chosenSession.session.name}
                            selectedSeats={selectedSeats.map(
                                (seat) => seat.name
                            )}
                            userInfo={userInfo}
                            resetBooking={resetBooking}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
