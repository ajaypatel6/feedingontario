import "./App.css";

// components
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";


import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Searchbar></Searchbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
