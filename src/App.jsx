

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import {routes} from "./Components/utils/routes"
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Contact from "./Routes/Contact"



function App() {
  return (
      <div className="App">
          <Navbar />
          
          <Routes>
            <Route path={routes.home} element= {<Home />}/>
            <Route path={routes.detail} element= {<Detail />}/>
            <Route path={routes.favs} element= {<Favs />}/>
            <Route path={routes.contact} element= {<Contact />}/>
            <Route path={routes.others} element= { <h1>Error 404 - Página no encontrada</h1>}/>
          </Routes>

          <Footer />
      </div>
  );
}

export default App;
