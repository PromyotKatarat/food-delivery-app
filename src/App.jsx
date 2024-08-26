import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import HoursInfo from './components/HoursInfo';


function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <Menu />
      <HoursInfo /> {/* Add the HoursInfo component here */}
      <Footer />
    </div>
  );
}

export default App;
