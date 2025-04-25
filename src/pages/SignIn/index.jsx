import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../features/authentication/useLogin";

export function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          localStorage.setItem("email", email);
          // localStorage.setItem("password", password);

          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center min-h-screen bg-sky-200">
        <div className="h-[400px] w-[400px] bg-slate-200 border-3 border-blue-600 rounded-lg">
          <div className="h-full w-full">
            <div className="flex justify-center items-center h-[20%] w-full">
              <div className="text-4xl font-bold text-blue-900 uppercase">
                LOGIN
              </div>
            </div>
            <div className="flex flex-col h-[60%] w-full">
              <div className="flex justify-center items-center h-[40%] w-full">
                <input
                  className="w-4/5 px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray-400 text-gray-700"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex justify-center items-center h-[40%] w-full">
                <input
                  className="w-4/5 px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray-400 text-gray-700"
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-center items-center h-[20%] w-full">
                <button
                  onClick={() => navigate("/signup", { replace: true })}
                  className="hover:text-blue-400 hover:underline"
                >
                  Não possui conta ? Crie uma !
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center h-[20%] w-full">
              <button className="w-4/5 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800">
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
