//style
import './App.scss';

//layout
import Homepage from './layout/Homepage/Homepage';
import Header from './layout/Header/Header';
import Basket from './layout/Basket/Basket';

import Search from './components/Search';
import About from './layout/About/About';


function App() {

  let search = false;


  return (
    <>
      <div className='App'>
        <Header />
        {search && <Search />}
        <main className={search ? "container" : "container-padding_top"}>
          {/* <Homepage /> */}
          <About />
        </main>
      </div>
      <Basket enable={false} />
    </>
  );
}

export default App;
