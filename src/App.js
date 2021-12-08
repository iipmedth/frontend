//Styling
import "./App.scss";
//Pages
import Register from "./Pages/Authentication/registerPage";
import Login from "./Pages/Authentication/loginPage";
import DashboardHandProfile from "./Pages/Dasboard-handProfile/DashboardHandPofile";
import HandVisualisatie from "./Components/HandVisualisatie/HandVisualisatie";
//Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardHandProfile />} />
        <Route path="/hand" element={<HandVisualisatie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

    // <div className="row center-lg">
    //   <div className="col-lg-8">
    //     {/* TODO: Revert to login page */}
    //     {/* <Login /> */}

    //   </div>
    // </div>
  );
}

export default App;
