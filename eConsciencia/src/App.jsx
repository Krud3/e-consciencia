import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Acidification from "@/pages/Acidification/Acidification";
import BlockWorldMain from "@/pages/contamination/BlockWorldMain";
import AuthComponent from "@/pages/(auth)/login";
import SignUpForm from "@/pages/(auth)/sign-up";
import Header from "@/components/Header/Header";
import { Outlet } from "react-router-dom";

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

        {/* Rutas con Header */}
        <Route element={<LayoutWithHeader />}>
          <Route path="/econsciencia" element={<Home />} />
          <Route path="/acidification" element={<Acidification />} />
          <Route path="/contamination" element={<BlockWorldMain />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;