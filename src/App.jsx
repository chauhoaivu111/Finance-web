import "./App.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import Routes from "./config/Routes";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={() => (
          <div>
            
           
            <Routes />
          </div>
          
        )}
      />
    </BrowserRouter>
  );
}

export default App;
