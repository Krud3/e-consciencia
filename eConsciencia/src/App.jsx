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

import QuizShortage from "@/pages/Quiz/QuizShortage/QuizShortage";

const LayoutWithHeader = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas de autenticación sin Header */}
        <Route path="/" element={<AuthComponent />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<AuthComponent />} />
        <Route path="/quiz-shortage" element={<QuizShortage />} />

        {/* Rutas con Header */}
        <Route element={<LayoutWithHeader />}>
          <Route path="/econsciencia" element={<Home />} />
          <Route path="/acidification" element={<Acidification />} />
          <Route path="/contamination" element={<BlockWorldMain />} />
          <Route path="/shortage" element={<Shortage />} />
          <Route path="/quiz" element={<QuizMain />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
