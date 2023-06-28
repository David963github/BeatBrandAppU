
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">Crear cuenta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="editarusuario">Iniciar sesión</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">Acerca de BeatBrand</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <BrowserRouter>
          <Routes>
            <Route path='/' element = {<ListaUsuarios></ListaUsuarios>} exact></Route>
            <Route path='/agregarusuario' element = {<AgregarUsuario></AgregarUsuario>} exact></Route>
            <Route path='/editarusuario' element = {<EditarUsuario></EditarUsuario>} exact></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
