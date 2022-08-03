import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthContextData,
  ToastContextData,
  CartContextData,
} from "./contexts/";
import { Routing } from "./routes/Routing";
function App() {
  return (
    <React.Fragment>
      <Router>
        <ToastContextData>
          <AuthContextData>
            <CartContextData>
              <Routing />
            </CartContextData>
          </AuthContextData>
        </ToastContextData>
      </Router>
    </React.Fragment>
  );
}

export default App;
