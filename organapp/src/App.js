import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import DonorHomePage from "./pages/DonorHomePage";
import DonorExample from "./pages/DonorExample";
import RecepientRegisteration from "./pages/RegistrationRecepient";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/register" element={<Registration />} />
          <Route exact path="/recepientregister" element={<RecepientRegisteration />} />
          <Route exact path="/donorHomePage" element={<DonorHomePage />} />
          <Route exact path="/donorExample" element={<DonorExample />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
