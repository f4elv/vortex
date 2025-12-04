"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import Blur from "@/components/ui/blur";
import Button from "@/components/ui/button";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    password: "",
  });

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/admin/login", form);
      localStorage.setItem("access_token", res.data.access_token);
      console.log(res.data.access_token)
      router.push("/admin");
      console.log(form)
    } catch (err) {
      console.log(err)
      alert("Credenciais inválidas");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <Blur />

      <form
        onSubmit={handleLogin}
        className="relative z-10 bg-black/40 border border-purple-600 rounded-2xl p-10 w-[380px] shadow-[0_0_40px_rgba(147,51,234,0.6)] backdrop-blur-xl"
      >
        <h1 className="text-3xl mb-6 font-bold text-purple-600 text-center">
          Painel Administrativo
        </h1>
        <div className="mb-6">
          <label className="block mb-1 text-sm text-purple-400">Senha</label>
          <input
            type="password"
            className="w-full p-3 bg-black/60 border border-purple-700 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <Button
          disabled={loading}
          variant="primary"
          className="w-full"
        >
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </div>
  );
}
