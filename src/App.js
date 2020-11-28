//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {console.log(location.pathname)}
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/Capture_website/" exact>
            <AboutUs />
          </Route>
          <Route path="/Capture_website/work" exact>
            <OurWork />
          </Route>
          <Route path="/Capture_website/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/Capture_website/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
