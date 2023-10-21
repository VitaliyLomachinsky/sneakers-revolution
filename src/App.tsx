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
import Catalog from "./layout/Catalog/Catalog";
import { useAppSelector } from "./Redux/hook";

function App() {
  const search = useAppSelector(state => state.UI.search);

  return (


    <div className="App" >
      <Header />
      <Search />
      <main className={search ? "container" : "container-padding_top"}>
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="new_release" element={<New_Release />} />
          <Route path="catalog" element={<Catalog />} />
        </Routes>
      </main>
      <Basket />
    </div>

  );
}

export default App;
