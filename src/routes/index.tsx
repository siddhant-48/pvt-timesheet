import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Registration } from "../pages/Registration";
import { LogTime } from "../pages/LogTime";
import NavBar from "../pages/Dashboard/NavBar"; // Import NavBar component

const PageRoutes = () => {
  return (
    <Router>
      {/* NavBar will be rendered for all routes inside PrivateRoute */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />}>
          {/* Place the NavBar inside the PrivateRoute */}
          <Route
            path=""
            element={
              <>
                <NavBar /> {/* NavBar rendered here */}
                <Dashboard />
              </>
            }
          />
          <Route
            path="dashboard"
            element={
              <>
                <NavBar />
                <Dashboard />
              </>
            }
          />
          <Route
            path="logtime"
            element={
              <>
                <NavBar />
                <LogTime />
              </>
            }
          />
        </Route>
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
