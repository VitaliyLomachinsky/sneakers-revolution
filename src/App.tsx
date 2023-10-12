import { Route, Routes } from "react-router-dom";

//style
import "./App.scss";

//layout
import Homepage from "./layout/Homepage/Homepage";
import Header from "./layout/Header/Header";
import Basket from "./layout/Basket/Basket";
import About from "./layout/About/About";
import Search from "./components/Search";
import Contact from "./layout/Contact/Contact";
import New_Release from "./layout/New_Release/New_Release";

function App() {
  let search = false;

  return (
    <>
      <div className="App">
        <Header />
        {search && <Search />}
        <main className={search ? "container" : "container-padding_top"}>
          <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="new_release" element={<New_Release />} />
          </Routes>
        </main>
        <Basket />
      </div>
    </>
  );
}

export default App;
