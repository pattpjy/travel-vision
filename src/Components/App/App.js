import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import Header from "../Header/Header";
import Main from "../Main/Main";
import TripDetails from "../TripDetails/TripDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<TripDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
