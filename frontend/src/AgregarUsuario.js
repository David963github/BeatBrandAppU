import React,{useState} from "react";
import uniquid from 'uniqid';
import axios from 'axios';

/* Creación de componente de react Agregar usuario*/
function AgregarUsuario() {
    //Hooks de react
    const[nombre_artistico, setNombre]= useState('')
    const[genero_musical, setEmail]= useState('')
    const[diferencial_valor, setTelefono]= useState('')
    //********************** 


     function agregarUsuario(){
        var usuario = {
            nombre_artistico: nombre_artistico,
            genero_musical: genero_musical,
            diferencial_valor: diferencial_valor,
            idusuario: uniquid()
        }
       console.log(usuario)
       axios.post('/api/usuario/agregarusuario', usuario)
  .then(res => {
    alert(res.data);
  })
  .catch(err => {
    console.log(err);
  });

     }


  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">¡Nos alegra que estés aquí, crea tu cuenta y ponle ritmo a tu marca artística!</h2>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre Artístico</label>
            <input type="text" className="form-control" value={nombre_artistico} onChange={(e)=>{setNombre(e.target.value)}}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Genero musical</label>
            <input type="email" className="form-control" value={genero_musical} onChange={(e)=>{setEmail(e.target.value)}}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Diferencial de valor</label>
            <input type="text" className="form-control" value={diferencial_valor} onChange={(e)=>{setTelefono(e.target.value)}}></input>
          </div>
          <button onClick={agregarUsuario}className="btn btn-success">Crear cuenta</button>
        </div>
      </div>
    </div>
  );
} 

export default AgregarUsuario;
