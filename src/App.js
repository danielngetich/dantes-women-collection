import NavBar from './components/NavBar';
import './App.css';
import Categories from "./components/Categories";
import Product from "./components/Product";
import CustomersComments from "./components/CustomersComments"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Categories/>
    </div>
  );
}

export default App;
