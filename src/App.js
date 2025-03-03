import logo from './logo.svg';
import './App.css';
import Navigation from './Customer/components/Navigation/Navigation';
import Homepage from './Customer/pages/Homepage';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <Homepage />
      </div>

    </div>
  );
}

export default App;
