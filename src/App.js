import "./App.scss";
// import Login from "./Pages/Login/Login";
import DashboardHandProfile from "./Pages/Dasboard-handProfile/DashboardHandPofile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardHandProfile />} />
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
