import SignUp from "./SignUp";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";


function App() {
  return (

    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <Routes>
            {/* <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Router>

      </div>
    </Container>

  );
}

export default App;
