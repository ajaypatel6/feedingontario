import "./App.css";

// components
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
//
import FirstContentTitle from "./components/FirstContentTitle";
import FirstContent from "./components/FirstContent";

import Cities from "./components/Cities";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrap">
      
      <Header></Header>
      <Searchbar></Searchbar>
      {/* <FirstContentTitle></FirstContentTitle> */}
      <FirstContent></FirstContent>
      {/* <Cities></Cities> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
