import { useState, useEffect, useRef } from "react";
import LogoUFU from "./Logo";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState();

  let user = null;

  const login = async (credentials) => {
    setLoading(true);
    return new Promise((resolve) =>
      setTimeout(() => {
        setRes({
          name: "test user",
          username: email,
          password: password,
          token: "test token"
        });
        setLoading(false);
        if (email === "admin" && password === "admin")
          window.location.pathname = "/relatorio";

        return;
      }, 5000)
    );
  };

  return (
    <>
      <LogoUFU />
      <div className="wrapper-login">
        <div className="container-login">
          {loading ? (
            <div className="loader" />
          ) : (
            <form onSubmit={login}>
              <p style={{ color: "#ffffff" }}>Acesso Restrito</p>
              <input
                placeholder="Email"
                type="text"
                required
                value={email}
                onChange={() => setEmail(event.target.value)}
              />
              <input
                placeholder="Senha"
                type="password"
                required
                value={password}
                onChange={() => setPassword(event.target.value)}
              />
              <input className="button" type="submit" value="Entrar" />
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
