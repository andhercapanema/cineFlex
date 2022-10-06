import React, { useState } from "react";
import Header from "./components/Header/Header";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import Footer from "./components/Footer/Footer";
import SeatsPage from "./pages/SeatsPage/SeatsPage";

function App() {
    const [chosenMovie, setChosenMovie] = useState(null);
    console.log(chosenMovie);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<MoviesPage setChosenMovie={setChosenMovie} />}
                />
                <Route path="/sessoes/:idMovie" element={<SessionsPage />} />
                <Route path="/assentos/:idSession" element={<SeatsPage />} />
            </Routes>
            {chosenMovie !== null && <Footer chosenMovie={chosenMovie} />}
        </BrowserRouter>
    );
}

export default App;
