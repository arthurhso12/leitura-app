import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/auth/login", {
      username,
      password
    });

    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-xl">
        <h1 className="text-purple-500 text-xl">Login</h1>

        <input
          placeholder="Usuário"
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}