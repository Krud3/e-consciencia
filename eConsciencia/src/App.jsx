import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Acidification from "@/pages/Acidification/Acidification";
import BlockWorldMain from "@/pages/contamination/BlockWorldMain";
import Shortage from "./pages/shortage/Shortage";
import AuthComponent from "@/pages/(auth)/login";
import SignUpForm from "@/pages/(auth)/sign-up";
import Header from "@/components/Header/Header";
import QuizMain from "@/pages/Quiz/QuizMain";
import { Outlet } from "react-router-dom";
import useAuthStore from '@/store/use-auth-store';
import { useEffect } from "react";

const LayoutWithHeader = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const App = () => {
  const observeAuthState = useAuthStore((state) => state.observeAuthState);

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  return (
    <Router>
      <Routes>
        {/* Rutas de autenticación sin Header */}
        <Route path="/" element={<AuthComponent />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<AuthComponent />} />

        {/* Rutas con Header */}
        <Route element={<LayoutWithHeader />}>
          <Route path="/econsciencia" element={<Home />} />
          <Route path="/acidification" element={<Acidification />} />
          <Route path="/contamination" element={<BlockWorldMain />} />
          <Route path="/shortage" element={<Shortage />} />
          <Route path="/quiz" element={<QuizMain />}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
