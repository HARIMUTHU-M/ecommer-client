import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Success from "./pages/Success/Success";
import Failure from "./pages/Failure/Failure";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
