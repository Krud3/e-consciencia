import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuthStore from "@/store/use-auth-store";
import { useNavigate, Link } from "react-router-dom"; 
import { auth, db } from "../../../firebase.config.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import LogoSolo from "@/assets/SVG/logo-solo.svg";

function AuthComponent() {
  const navigate = useNavigate();

  const loginGoogleWithPopup = useAuthStore((state) => state.loginGoogleWithPopup);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLoginWithGoogle = async () => {
    try {
      await loginGoogleWithPopup();
      navigate('/econsciencia');
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  const handleLoginWithEmail = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      const userDoc = doc(db, "users", uid);
      const userSnapshot = await getDoc(userDoc);

      if (userSnapshot.exists()) {
        console.log("User logged in and exists in Firestore:", userSnapshot.data());
        navigate('/econsciencia');
      } else {
        console.error("User does not exist in Firestore.");
      }
    } catch (error) {
      console.error("Error during email login:", error);
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <form onSubmit={handleLoginWithEmail} className="mx-auto grid w-[350px] gap-6">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button onClick={handleLoginWithGoogle} variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </form>
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
