import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import FirstContent from "./components/FirstContent";
import MiddleContent from "./components/MiddleContent";
import Cities from "./components/Cities";
import Footer from "./components/Footer";

// pages
import About from "./pages/About"
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Searchbar></Searchbar>
            <FirstContent></FirstContent>
            <MiddleContent></MiddleContent>
            <Cities></Cities>
            <Footer></Footer>
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
