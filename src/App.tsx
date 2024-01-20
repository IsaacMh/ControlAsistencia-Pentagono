import React, { useState } from "react";
type FormElement = React.FormEvent<HTMLFormElement>;

function App(): JSX.Element {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();

    // Validación basica, para cambiarlo con la bd
    if (username === "usuarioValido" && password === "contraseñaValida") {
      // Usuario y contraseña válidos
      setError(null);
      // redirigir al usuario si estan mal la contraseña o usuario 
    } else {
      // Usuario o contraseña incorrectos
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="container text-center pt-3">
      <div className="row mt-4">
        <div className="col-md-6 mx-auto text-center">
          <div className="card">
            <div className="card-body p-3">
              <div className="container text-center" style={{marginBottom:"15%"}}>
                <div className="row align-items-center">
                  <div className="col-md-6" >
                    <img src="/logo.png" alt="logo" className="img-fluid" />
                  </div>
                  <div className="col-md-6 text-md-start mt-3 mt-md-0">
                    <h1>
                      Colegio
                      <br />
                      Internacional
                      <br />
                      Pentágono
                    </h1>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} >
                <input
                  type="text"
                  placeholder="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control mt-3 mb-3"
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control mt-3 mb-3"
                />
                <button className="btn btn-primary mt-3">LogIn</button>
                {error && <p>{error}</p>}
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
