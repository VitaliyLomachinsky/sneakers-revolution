//style
import './App.scss';

//layout
import Homepage from './layout/Homepage/Homepage';
import Header from './layout/Header/Header';


function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
