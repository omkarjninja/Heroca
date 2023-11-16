import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Routes
} from 'react-router-dom';
import Nav from './components/navigation/nav';
import FrontPage from './components/navigation/first';
import SecondPage from './components/secondPage';
import ThirdPage from './components/thirdPage';
import FourthPage from './components/fourthpage';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/About';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    
  );
}

export default App;
