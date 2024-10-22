import React from 'react';
import NavBar from '../../Components/Navbar/Navbar';

const DummySlider = () => {
  return (
    <div className="slider" style={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#0070a9', color: '#fff', width: '100vw', margin: '0', boxSizing: 'border-box' }}>
      <div className="slide" style={{ margin: '20px auto', maxWidth: '1200px', width: '100%' }}>
        <h2>Slide 1</h2>
        <p>This is a dummy slide.</p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="about-us" style={{ padding: '50px 0', backgroundColor: '#fffde7', textAlign: 'center', width: '100vw', margin: '0', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '20px' }}>About Us</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum expedita beatae earum nam quam, consequatur sed repellat explicabo voluptas impedit! Ea quos dolor earum modi necessitatibus repellat autem consequuntur consectetur?
        </p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#0070a9', color: '#fff', padding: '20px', textAlign: 'center', width: '100vw', margin: '0', boxSizing: 'border-box' }}>
      <p>© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

const HomePage = () => {
  return (
    <div className="home-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', margin: '0', padding: '0', boxSizing: 'border-box' }}>
      <NavBar />

      <div style={{ flex: '1', width: '100vw', margin: '0', padding: '0', boxSizing: 'border-box' }}>
        <DummySlider />
        <AboutUs />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
