import "./App.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import Routes from "./config/Routes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
        
          <div>
            <Header/>
            <Routes/>
            <Footer/>
          </div>
          
        )}
      />
    </BrowserRouter>
  );
}

export default App;

