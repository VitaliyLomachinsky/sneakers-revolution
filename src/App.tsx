//style
import './App.scss';

//layout
import Homepage from './layout/Homepage/Homepage';
import Header from './layout/Header/Header';
import Basket from './layout/Basket/Basket';


function App() {
  

  return (
    <>
      <div className='App'>
        <Header />
        <main className='container'>
          <Homepage />
        </main>
      </div>
      <Basket enable={true} />
    </>
  );
}

export default App;
