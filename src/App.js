import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routings from "./components/Routes/Routings.jsx";
import { AuthData } from "./contexts/AuthContext/AuthContext.js";
function App() {
  return (
    <React.Fragment>
      <Router>
        <AuthData>
          <Routings />
        </AuthData>
      </Router>
    </React.Fragment>
  );
}

export default App;
