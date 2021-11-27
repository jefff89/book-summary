import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import SummaryForm from "./pages/SummaryForm";
import Favorites from "./pages/Favorites";
import FavContextProvider from "./components/store/FavContextProvider";
import LoginModal from "./components/layout/LoginModal";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  const [modalShow, setModalShow] = useState(true);

  useEffect(() => {
    const login = localStorage.getItem("LOGGED_IN");
    if (login === "1") {
      setModalShow(false);
    }
  }, []);

  const loginHandler = () => {
    setModalShow(false);
    localStorage.setItem("LOGGED_IN", "1");
  };

  const logoutHandler = () => {
    setModalShow(true);
    localStorage.removeItem("LOGGED_IN");
  };
  return (
    <FavContextProvider>
      {modalShow && <LoginModal loginHandler={loginHandler} />}
      <Header onClick={logoutHandler} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/summary" element={<SummaryForm />} />

        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </FavContextProvider>
  );
}

export default App;
