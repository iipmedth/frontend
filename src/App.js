//Styling
import "./App.scss";
//Pages
import Register from "./Pages/Authentication/registerPage";
import Login from "./Pages/Authentication/loginPage";
import DashboardHandProfile from "./Pages/Dasboard-handProfile/DashboardHandPofile";
//Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* PRIVATE ROUTES */}
            <Route path="/dashboard" element={<DashboardHandProfile />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
