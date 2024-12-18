import React from "react";
import { Button } from "@/components/ui/button"; 
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, Link } from "react-router-dom"; 
import { auth } from "../../../firebase.config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUser, getUser } from "@/DAO/userDao"; 
import { toast } from "sonner"; 

export function SignUpForm() {

  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const firstName = event.target["first-name"].value;
    const lastName = event.target["last-name"].value;

    try {
      // Verificar si el usuario ya existe en la colección
      const existingUser = await getUser(email);
      if (existingUser) {
        toast("User already exists!"); // Notificación de error si el usuario ya existe
        return;
      }

      // Crear el usuario en Firebase Auth y Firestore
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      await createUser(uid, { firstName, lastName, email });

      toast("✅ User created successfully!"); // Mensaje de éxito con emoji
      navigate('/econsciencia');
    } catch (error) {
      console.error("Error signing up:", error);
      toast("❌ Error signing up. Please try again."); // Mensaje de error con emoji
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
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
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/signin" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}

export default SignUpForm;
