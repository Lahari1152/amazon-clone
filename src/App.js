import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ProductsArea from './components/ProductsArea';
import Tags from './components/Tags';

function App() {
  return (
    <div>
      <Navbar/>
      <Tags/>
      <Carousel/>
      <ProductsArea/>
    </div>
  );
}

export default App;
