import './App.css';
import maskGroup from './Assets/MobilizersPhotos/Mask_group.png';
import logo from './Assets/HERO Brand Assets/logo.png'
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App d-flex flex-column align-items-center">
      <img alt='logo' src={logo} className="logo" />
      <img alt='women' className='women' src={maskGroup} srcSet={maskGroup} />
      <h1 className='headline'>
      Do you want to do more for the climate but just don’t know how?
      </h1>
      <p className='headline-desc'>HERO gives you the power to take meaningful action in just 3 clicks by financing climate mobilizers around the world with the most impact on policy today. </p>

      <ul className='d-flex flex-column'>
        <li>
        No intermediaries
        </li>
      <li>Full transparency</li>
        <li>
        Vote on the future of HERO
        </li>
      </ul>

      <Link to='/supporter'> <button className='btn-hero'>Become a HERO Supporter</button></Link>
    
    </div>

  );
}

export default App;
