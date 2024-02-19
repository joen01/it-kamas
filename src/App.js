import logo from './logo.svg';
import './App.css';
import Header from './companents/Header';
import Navbar from './companents/Navbar';
import Profile from './companents/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>);
}


export default App;
