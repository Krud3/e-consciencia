import React from "react";
import { Button } from "@/components/ui/button"; // Asegúrate de que la ruta sea correcta
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuthStore from "@/store/use-auth-store"; // Ajusta la ruta según tu configuración
import LogoSolo from "@/assets/SVG/logo-solo.svg";
import {useNavigate} from "react-router-dom";

function AuthComponent() {
  const navigate = useNavigate();
  const loginGoogleWithPopup = useAuthStore((state)=>state.loginGoogleWithPopup); // Usamos solo la función de login con Google
  const handleLoginWithGoogle = async () => {
    try {
      await loginGoogleWithPopup();
      navigate('/econsciencia');
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
            {/* Botón de inicio de sesión (sin funcionalidad por ahora) */}
            <Button type="submit" className="w-full">
              Login
            </Button>
            {/* Botón para iniciar sesión con Google */}
            <Button onClick={handleLoginWithGoogle} variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block flex justify-center items-center h-screen">
        <img
          src={LogoSolo}
          alt="LogoSolo"
          className="w-full h-auto object-cover dark:brightness-[0.2] dark:grayscale" 
        />
      </div>
    </div>
  );
}

export default AuthComponent;
