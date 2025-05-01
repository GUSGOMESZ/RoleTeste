import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../features/authentication/useSignup";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";

export function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    signup(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
          navigate("/signin", { replace: true });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-glass bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-xl border border-white/10 overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="absolute inset-0 bg-white/5 pattern-dots pattern-blue-500 pattern-bg-transparent pattern-size-4 pattern-opacity-20" />

          <div className="relative px-8 py-12">
            {/* Cabeçalho */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 mb-2">
                ROLETESTE
              </h1>
              <p className="text-white/80 text-lg">
                Crie sua conta para começar
              </p>
            </div>

            {/* Campos de Input */}
            <div className="space-y-6 mb-8">
              <div className="group relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-blue-300 transition-colors" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 rounded-xl border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 text-white placeholder-white/50 transition-all outline-none"
                />
              </div>

              <div className="group relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-blue-300 transition-colors" />
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 rounded-xl border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 text-white placeholder-white/50 transition-all outline-none"
                />
              </div>
            </div>

            {/* Botão de Cadastro */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 rounded-xl text-white font-semibold tracking-wide transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Criar Conta
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            {/* Link de Login */}
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => navigate("/signin")}
                className="text-white/70 hover:text-white/90 hover:underline transition-colors text-sm"
              >
                Já tem uma conta?{" "}
                <span className="font-semibold">Fazer login</span>
              </button>
            </div>
          </div>

          {/* Efeito de Brilho */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl filter opacity-30 animate-pulse" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl filter opacity-30 animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </form>
  );
}
