import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TourDetail from "./pages/TourDetail";
import AllDestinations from "./pages/AllDestinations";
import Booking from "./pages/Booking";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<AllDestinations />} />
        <Route path="/destination/:id" element={<TourDetail />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
