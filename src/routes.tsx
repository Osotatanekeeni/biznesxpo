import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";

export default function MainRoutes() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Authentication />} />
        {/* <Route path="/" element={<Authentication />} /> */}
        {token ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Authentication />} />
        )}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
