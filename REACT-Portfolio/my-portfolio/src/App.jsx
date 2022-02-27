import { useContext } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Introduction from './components/Introduction/introduction';
import ProductList from './components/productlist/ProductList';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';




//los componentes SIEMPRE en mayusculas

function App() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && 'white'}}>
      <Toggle/>
      <Introduction/>
      <About/> 
      <ProductList/>
      <Contact/>
      
    </div>
  );
}

export default App;
