import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/home";
import { Info } from "../components/pages/info";
import { Login } from "../components/pages/login";
import { AppContext } from "../context/contextApp";

export const Rotas = () => {
  const { key, setKey } = useContext(AppContext);

  useEffect(() => {
    const localKey = localStorage.getItem("key");
    if (localKey) setKey(localKey);
  }, []);

  return (
    <Routes>
      {!key ? (
        <Route path="*" element={<Login />} />
      ) : (
        <>
          <Route path="*" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </>
      )}
    </Routes>
  );
};
