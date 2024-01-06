import logo from './logo.svg';
import './App.css';
import HOME from './components/home';
import SERVICES from './components/services';
import ABOUT from './components/about';
import CONTACT from './components/contact';
function App() {
  return (
    <div className="App">
      <HOME />
      <SERVICES />
      <ABOUT />
      <CONTACT />
    </div>
  );
}

export default App;
