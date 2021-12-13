//Styling
import "./App.scss";
//Pages
import Register from "./Pages/Authentication/registerPage";
import Login from "./Pages/Authentication/loginPage";
import DashboardHandProfile from "./Pages/Dasboard-handProfile/DashboardHandPofile";
import Model from "./Components/HandVisualisatie/HandVisualisatie";
//Modules
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardHandProfile />} />
          <Route path="/hand" element={<Model />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Suspense>

    // <div className="row center-lg">
    //   <div className="col-lg-8">
    //     {/* TODO: Revert to login page */}
    //     {/* <Login /> */}

    //   </div>
    // </div>
  );
}

export default App;
