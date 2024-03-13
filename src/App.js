/* eslint-disable jsx-a11y/anchor-is-valid */
import LogoIMG from './assets/Logo-car.png'
import { FaUser, FaLock } from 'react-icons/fa';
import './syles.css'

function App() {
  return (
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">

              <span className="login-form-title">
                <img src={LogoIMG} alt="Logo-car" />
              </span>

              <div className="wrap-input">
                <FaUser className="icon"/>
                <input className="input" type="email" placeholder='USERNAME' />
              </div>

              <div className="wrap-input">
                <FaLock className="icon"/>
                <input className="input" type="password" placeholder='PASSWORD' />
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn">LOGIN</button>
              </div>

              <div className="txt-center">
                <span className="txt1">Não possui conta?</span>

                <a className='txt2' href="#">Criar conta</a>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
}

export default App;
