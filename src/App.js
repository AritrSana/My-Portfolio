/** @format */

import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import ErrorPage from "./components/ErrorPage";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  return (
    <div
      style={{
        position: loading && "relative",
        minHeight: loading && "100vh",
      }}>
      {loading ? (
        <Spinner className='spinner' size='xl' />
      ) : (
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
