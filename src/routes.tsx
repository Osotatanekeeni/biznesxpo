import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Authentication />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}
