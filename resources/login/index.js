import { useState } from "react";
import "./css/styles.css";
import Alert from "../alert"; 
import Input from "../input";
import Submit from "../submit";
const Login = ({ title }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [login, setLogin] = useState(false);
  const [error, setError] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [nextId,setNextId] = useState(0);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const checkPasswordChangeHandler = (event) => {
    setPassword2(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();

    setLogin(false);
    setError("");

    if (password === password2) {
      setLogin(true);
      setUsuarios((prevUsuarios) => [
        ...prevUsuarios,
        { id: nextId, name:name, password:password }
        
      ]);
      setNextId(nextId+1)
      setName("");
      setPassword("");
      setPassword2("");
      
    } else {
      setError("Las contraseñas no coinciden");
    }

    
  };

  return (
    <>
      <div className={"wrapper"}>
        <div className={"container"}>
          <h1>{title}</h1>
          <form className="form shadow-sm" onSubmit={formHandler}>
            <div>
              
              <Input
                label="Nombre"
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                required
                onChange={nameChangeHandler}
                value={name}
              />
            </div>
              <Input
                label="Contraseña"
                type="password"
                name="password"
                id="password"
                placeholder="password"
                required={true}
                onChange={passwordChangeHandler}
                value={password}
              />
              <Input
                label="Repita la contraseña"
                type="password"
                name="rpassword"
                id="rpassword"
                placeholder="repita la contraseña"
                required
                onChange={checkPasswordChangeHandler}
                value={password2}
              />
           <Submit />
          </form>
          <div className="data">
          {login && <Alert className={"w-full"}  key={1} title={"Felicitaciones: "} info={"Usuario se agrego corretamente"} type={"success"} />}
          {error && <Alert className={"w-full"}  key={1} title={"Alerta: "} info={error} type={"danger"} />}
          
          </div>
          
          
          
        </div>
        {usuarios.length > 0 && 
          <div className={"container"}>
            <h2>Usuarios</h2>
            {usuarios.map(user =>  <Alert type="info" key={user.id} title={"usuario id: "+user.id} info={user.name} className={"w-full"} />)}
          </div>
        }
      </div>
    </>
  );
};

export default Login;
