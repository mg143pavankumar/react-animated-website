import React, {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import GlobalStyle from './GlobalStyle';
import { SlideerData } from './data/SliderData';
import Dropdown from './components/Dropdown/Dropdown';
import InforSection from './components/InforSection';
import { InfoData, InfoDataTwo } from './data/InfoData';
import Footer from './components/Footer';
import { FooterContactData, FooterOfficeData } from './data/FooterData';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }



  return (
    <div>
      <GlobalStyle />
      <Navbar toggle = {toggle}/>
      <Dropdown  isOpen = {isOpen} toggle = {toggle} />
      <Hero slides ={SlideerData}/>
      <InforSection {...InfoData}/>
      <InforSection {...InfoDataTwo}/>

      <Footer {...FooterOfficeData} {...FooterContactData}/>
    </div>
  );
}

export default App;
