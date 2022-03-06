import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Entry from "./components/Entry.js";
import Footer from "./components/Footer.js";
import './style.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LandingPage303 from "./components/landing-page303"

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
          <nav>
            <Nav />
          </nav>
          <Routes>
            <Route exact path="/xyz">
              <div className="datarows">
                <header class="header">
                  <span className="row-heading">Vehicle ID</span>
                  <span className="row-heading">Date</span>
                  <span className="row-heading">Data size</span>
                </header>
                <Entry vehc_id="1234" date="1/1/2022" data_size="413kb" />
                <Entry vehc_id="3453" date="2/1/2022" data_size="415kb" />
                <Entry vehc_id="8775" date="3/1/2022" data_size="411kb" />
                <Entry vehc_id="6654" date="4/1/2022" data_size="412kb" />
                      {/* <Header /> */}
              </div>
            </Route>
            {/* <Route exact path="/hello">

            </Route> */}
          </Routes>
          <footer>
              <Footer />
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
