import LogoIMG from './assets/Logo-car.png'
import { FaUser, FaLock } from 'react-icons/fa';
import './syles.css'

function App() {
  return (
      <div className="container">
        <div className="area-container-login">

          <div className="area-login">

            <form >
              <span className='logo-img' >
                <img  src={LogoIMG} alt="Logo-car" />
              </span>

              <div className="area-input">
                <FaUser className="icon"/>
                <input className="input" type="email" placeholder='USERNAME' autoFocus required/>
              </div>

              <div className="area-input">
                <FaLock className="icon"/>
                <input className="input" type="password" placeholder='PASSWORD' required />
              </div>

              <div className="area-btn-login">
                <button className="btn-login">LOGIN</button>
              </div>

              <div className="area-pass">
                <a className='txt-pass' href="g#">Forgot Password?</a>

              </div>

            </form>
          </div>
        </div>
      </div>
    );
}

export default App;
