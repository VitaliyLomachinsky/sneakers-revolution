//style
import './App.scss';

//layout
import Homepage from './layout/Homepage/Homepage';
import Header from './layout/Header/Header';
import Basket from './layout/Basket/Basket';
import { useState } from 'react';
import Search from './components/Search';


function App() {

  let search = false;


  return (
    <>
      <div className='App'>
        <Header />
        {search && <Search />}
        <main className={search ? "container" : "container-padding_top"}>

          <Homepage />
        </main>
      </div>
      <Basket enable={false} />
    </>
  );
}

export default App;
