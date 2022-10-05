import React from "react";
import Header from "./components/Header/Header";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage/MoviesPage";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<MoviesPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
