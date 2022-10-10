import React, { useState } from "react";
import Header from "./components/Header/Header";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import Footer from "./components/Footer/Footer";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

function App() {
    const [chosenMovie, setChosenMovie] = useState(null);
    console.log(chosenMovie);
    const [chosenSession, setChosenSession] = useState({
        day: { weekday: null },
        session: { name: null },
    });
    console.log(chosenSession);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [userInfo, setUserInfo] = useState({ name: "", cpf: "" });
    const [hasChosenEverything, setHasChosenEverything] = useState(false);

    const resetBooking = () => {
        setChosenMovie(null);
        setChosenSession({
            day: { weekday: null },
            session: { name: null },
        });
        setSelectedSeats([]);
        setUserInfo({ name: "", cpf: "" });
        setHasChosenEverything(false);
    };

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<MoviesPage setChosenMovie={setChosenMovie} />}
                />
                <Route
                    path="/sessoes/:idMovie"
                    element={
                        <SessionsPage setChosenSession={setChosenSession} />
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
                            finishBooking={() => setHasChosenEverything(true)}
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
            {chosenMovie !== null && !hasChosenEverything && (
                <Footer
                    chosenMovie={chosenMovie}
                    chosenDay={chosenSession.day.weekday}
                    chosenHour={chosenSession.session.name}
                />
            )}
        </BrowserRouter>
    );
}

export default App;
