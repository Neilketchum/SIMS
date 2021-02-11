import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './Components/Navbar/TopBar';

import BodyCarousel from './Components/Carousel/BodyCarousel';
import Training from './Components/Training/Training';
import Message from './Components/Message/Message';
import Footer from './Components/Footer/Footer';
import { motion } from "framer-motion"
import WhyUs from './Components/WhyUs/WhyUs';
function App() {
  return (
    <div className="App">
      <TopBar />
      <BodyCarousel />
      <WhyUs />
      <h1 style={{
        textAlign: "center",
        margin: "2rem",
        fontWeight: "800",
        fontSize: "3rem"
      }}>Our Courses</h1>
      <Training />
      <br></br>
      <br></br>
      <br></br>

      <Message />

      <Footer />
    </div>
  );
}

export default App;
