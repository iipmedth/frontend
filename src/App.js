//Styling
import "./App.scss";
//Pages
import Register from "./Pages/Authentication/registerPage";
import Login from "./Pages/Authentication/loginPage";
import DashboardHandProfile from "./Pages/Dasboard-handProfile/DashboardHandPofile";
import PatientsOverview from "./Pages/Patients-overview/PatientsOverview";

//Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/patients" element={<PatientsOverview />} />
            <Route path="/dashboard" element={<DashboardHandProfile />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
