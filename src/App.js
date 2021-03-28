import React, {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import GlobalStyle from './GlobalStyle';
import { SlideerData } from './data/SliderData';
import Dropdown from './components/Dropdown/Dropdown';

function App() {

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle = {toggle}/>
      <Dropdown  isOpen = {isOpen} toggle = {toggle} />
      <Hero slides ={SlideerData}/>
    </div>
  );
}

export default App;
