import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";



function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
        <Footer/>

    </>
  );
}

export default App;
